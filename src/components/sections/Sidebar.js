import React from "react";
import "../../styles/styles.css";

const Sidebar = ({
  personal,
  visibleSections,
  activeSection,
  handleNavClick,
  isMobileMenuOpen,
}) => {
  return (
    <div className={`sidebar ${isMobileMenuOpen ? "sidebar--open" : ""}`}>
      {/* Profile and Navigation Container */}
      <div className="sidebar-container">
        {/* Profile Photo */}
        <div className="profile-photo-container">
          <img
            src={personal.profileImage || "/api/placeholder/128/128"}
            alt="Profile"
            className="profile-photo"
            onError={(e) => {
              console.log("Image failed to load:", e.target.src);
              e.target.style.display = "none";
            }}
            onLoad={() => {
              console.log("Image loaded successfully:", personal.profileImage);
            }}
          />
        </div>

        {/* Navigation */}
        <nav className="navigation">
          {visibleSections.map((section) => (
            <button
              key={section}
              onClick={() => handleNavClick(section)}
              className={`nav-button ${
                activeSection === section
                  ? "nav-button--active"
                  : "nav-button--inactive"
              }`}
            >
              {section.toUpperCase()}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
