import React, { useState } from 'react';
import './App.css';
import RecipeManager from './RecipeManager';
import AuthManager from './AuthManager';
import RecipeSearch from './RecipeSearch';

/**
 * Main container for the RecipeVault SPA - handles feature navigation.
 */
function App() {
  // Manage which feature is currently active (nav state)
  const [activeFeature, setActiveFeature] = useState('recipes');

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