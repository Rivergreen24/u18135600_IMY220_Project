// components/SearchInput.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/HomePage.css";

const SearchInput = ({ currentUserId }) => {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("projects");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const levenshteinDistance = (a, b) => {
    const matrix = Array(b.length + 1).fill().map(() => Array(a.length + 1).fill(0));
    for (let i = 0; i <= a.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= b.length; j++) matrix[j][0] = j;
    for (let j = 1; j <= b.length; j++) {
      for (let i = 1; i <= a.length; i++) {
        const indicator = a[i - 1] === b[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    return matrix[b.length][a.length];
  };

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const search = async () => {
      setLoading(true);
      try {
        let data = [];
        const lowerQuery = query.toLowerCase();

        if (searchType === "projects") {
          const res = await fetch("/api/projects");
          if (res.ok) {
            const all = await res.json();

            const scored = all.map(p => {
              const nameLower = p.name.toLowerCase();
              const distance = levenshteinDistance(lowerQuery, nameLower);
              const maxLen = Math.max(lowerQuery.length, nameLower.length);
              const similarity = maxLen === 0 ? 1 : 1 - (distance / maxLen);

              return { project: p, similarity };
            });

            data = scored
              .filter(s =>
                s.similarity > 0.4 ||
                s.project.name.toLowerCase().includes(lowerQuery)
              )
              .sort((a, b) => b.similarity - a.similarity)
              .map(s => s.project)
              .slice(0, 10);
          }
        } else {
          const res = await fetch(`/api/users/search?q=${encodeURIComponent(query)}`);
          if (res.ok) {
            const users = await res.json();
            data = users.filter(u => u.userId !== currentUserId);
          }
        }

        setResults(data.map(item => ({
          ...item,
          type: searchType === "projects" ? "project" : "user"
        })));
      } catch (err) {
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(search, 300);
    return () => clearTimeout(debounce);
  }, [query, searchType, currentUserId]);

  return (
    <div className="search-wrapper">
      {/* INPUT + BUTTON IN ONE ROW */}
      <div className="search-bar-row">
        <input
          type="text"
          placeholder={`Search ${searchType === "projects" ? "project names" : "usernames"}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          id="search-bar"
        />
        <button
          onClick={() => setSearchType(prev => prev === "projects" ? "users" : "projects")}
          className="search-toggle-btn"
        >
          {searchType === "projects" ? "Projects" : "Users"}
        </button>
      </div>




      {/* RESULTS */}
      {loading && <p className="search-loading">Searching...</p>}

      {results.length > 0 && (
        <div className="search-results">
          {results.map((item) => (
            <Link
              key={item.type === "project" ? item.projectId : item.userId}
              to={item.type === "project" ? `/project/${item.projectId}` : `/profile/${item.userId}`}
              className="search-result-link"
            >
              <div className="search-result-card">
                {item.type === "project" ? (
                  <>
                    <h4>{item.name}</h4>
                    <p className="search-meta">
                      by <span className="link">@{item.owner}</span>
                    </p>
                  </>
                ) : (
                  <>
                    <h4>{item.username}</h4>
                    <p className="search-meta">{item.bio || "No bio"}</p>
                  </>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {query && !loading && results.length === 0 && (
        <p className="search-empty">
          No {searchType} found.
        </p>
      )}
    </div>
  );
};

export default SearchInput;