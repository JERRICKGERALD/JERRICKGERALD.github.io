// src/components/sections/AboutSection.js
import React from "react";
import "./../../styles/styles.css";
import { Twitter, Github, Mail, ExternalLink, Linkedin } from "lucide-react";
import { SiGooglescholar } from "react-icons/si";

const AboutSection = ({ personal, social, displayedText, activeSection }) => {
  return (
    <div className="about-section">
      <div className="about-content">
        {/* Greeting and Name with typing effect */}
        <div className="about-name-container">
          <p className="about-greeting">Hi, I'm</p>
          <h1 className="about-name">
            {displayedText}
            {activeSection === "about" && (
              <span className="about-typing-cursor">|</span>
            )}
          </h1>
        </div>

        {/* Title */}
        <p className="about-title">{personal.title}</p>

        {/* Email */}
        <p className="about-email">
          {personal.email.replace("@", " [at] ").replace(".", " [dot] ")}
        </p>

        {/* Bio */}
        <div className="about-bio-container">
          <p className="about-bio">{personal.bio}</p>
        </div>

        {/* Social Links */}
        <div className="about-social-links">
          {social.twitter && (
            <a href={social.twitter} className="social-link">
              <Twitter className="social-icon" />
            </a>
          )}
          {social.github && (
            <a href={social.github} className="social-link">
              <Github className="social-icon" />
            </a>
          )}
          {social.linkedin && (
            <a href={social.linkedin} className="social-link">
              <Linkedin className="social-icon" />
            </a>
          )}
          {social.scholar && (
            <a href={social.scholar} className="social-link">
              <SiGooglescholar className="social-icon" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
