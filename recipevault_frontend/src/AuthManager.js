import React from "react";

/**
 * AuthManager component placeholder.
 * Will handle user registration and login forms.
 */
// PUBLIC_INTERFACE
function AuthManager() {
  return (
    <section>
      <h2 style={{ color: "var(--primary)" }}>User Authentication</h2>
      <p style={{ color: "var(--text-secondary)" }}>
        Login or register to save your favorite recipes and sync across devices. (Feature coming soon)
      </p>
      {/* TODO: Implement login and registration forms */}
      <div style={{
        border: "2px dashed var(--secondary)",
        padding: 24,
        borderRadius: 10,
        background: "var(--base-surface)",
        marginTop: 24
      }}>
        <em>Login/Register UI placeholder</em>
      </div>
    </section>
  );
}

export default AuthManager;
