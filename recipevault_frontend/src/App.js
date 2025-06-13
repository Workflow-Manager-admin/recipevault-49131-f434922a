import React, { useState, useEffect } from 'react';
import './App.css';
import RecipeManager from './RecipeManager';
import AuthManager from './AuthManager';
import RecipeSearch from './RecipeSearch';

/**
 * Main container for the RecipeVault SPA - handles feature navigation and theme switching.
 */
// PUBLIC_INTERFACE
function App() {
  // Manage which feature is currently active (nav state)
  const [activeFeature, setActiveFeature] = useState('recipes');

  // Manage theme state: 'light' | 'dark'
  const [theme, setTheme] = useState(() => {
    // Try localStorage or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Apply theme to document root [data-theme] (updates CSS variables from App.css)
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle light/dark theme
  // PUBLIC_INTERFACE
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  // Map nav to component
  const renderFeature = () => {
    switch (activeFeature) {
      case 'recipes':
        return <RecipeManager />;
      case 'auth':
        return <AuthManager />;
      case 'search':
        return <RecipeSearch />;
      default:
        return null;
    }
  };

  return (
    <div className="app" style={{ background: "var(--base-bg)", color: "var(--text-color)" }}>
      <nav className="navbar" style={{ background: "var(--navbar-bg)" }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
          <div className="logo" style={{ color: "white" }}>
            <span className="logo-symbol" style={{ color: "var(--secondary)" }}>&#127859;</span>
            RecipeVault
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="nav-links" style={{ display: 'flex', gap: '12px' }}>
              <button
                className="btn"
                style={{
                  background: activeFeature === 'recipes' ? "var(--accent)" : "var(--secondary)",
                  color: "white"
                }}
                onClick={() => setActiveFeature('recipes')}
              >Recipes</button>
              <button
                className="btn"
                style={{
                  background: activeFeature === 'search' ? "var(--accent)" : "var(--secondary)",
                  color: "white"
                }}
                onClick={() => setActiveFeature('search')}
              >Search</button>
              <button
                className="btn"
                style={{
                  background: activeFeature === 'auth' ? "var(--accent)" : "var(--secondary)",
                  color: "white"
                }}
                onClick={() => setActiveFeature('auth')}
              >Login/Register</button>
            </div>
            {/* Theme toggle button */}
            <button
              className="btn"
              style={{
                background: theme === 'dark' ? "var(--accent)" : "var(--secondary)",
                color: "white",
                marginLeft: "18px",
                minWidth: 44,
                minHeight: 40,
                fontSize: "1.2rem",
                padding: "7px 12px",
                border: theme === 'dark' ? "1.5px solid var(--primary)" : "1.5px solid var(--border-color)"
              }}
              aria-label={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              title={theme === 'dark' ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
            >
              {theme === 'dark'
                ? <span style={{ fontSize: '1.1em' }}>🌙</span>
                : <span style={{ fontSize: '1.1em' }}>☀️</span>
              }
            </button>
          </div>
        </div>
      </nav>
      <main style={{ flex: 1, paddingTop: 96, minHeight: '100vh', background: "var(--base-bg)" }}>
        <div className="container" style={{ paddingTop: 24 }}>
          {renderFeature()}
        </div>
      </main>
    </div>
  );
}

export default App;