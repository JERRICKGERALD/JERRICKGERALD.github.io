import React, { useState, useEffect, useRef } from "react";
import AboutSection from "./sections/AboutSection";
import { Menu, X } from "lucide-react";
import PublicationsSection from "./sections/PublicationsSection";
import { TalksSection } from "./sections/TalksSection";
import { EducationSection } from "./sections/EducationSection";
import { TeachingSection } from "./sections/TeachingSection";
import { AwardsSection } from "./sections/AwardsSection";
import Sidebar from "./sections/Sidebar";
import "../styles/styles.css";
import myPortfolioData from "../data/portfolioData";

const AcademicPortfolio = ({ portfolioData = myPortfolioData }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add mobile menu state

  const {
    personal,
    publications,
    talks,
    education,
    Experience,
    awards,
    social,
    sectionVisibility,
    sectionOrder,
  } = portfolioData;

  const visibleSections = sectionOrder.filter(
    (section) => sectionVisibility[section]
  );
  const fullName = `${personal.firstName} ${personal.lastName}`;

  // Create refs for each section
  const sectionRefs = useRef({});

  // Initialize refs for all visible sections
  visibleSections.forEach((section) => {
    if (!sectionRefs.current[section]) {
      sectionRefs.current[section] = React.createRef();
    }
  });

  // Typing effect for name in About section
  useEffect(() => {
    if (activeSection === "about") {
      setDisplayedText("");
      setCurrentIndex(0);
    }
  }, [activeSection]);

  useEffect(() => {
    if (activeSection === "about" && currentIndex < fullName.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullName.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullName, activeSection]);

  // Scroll spy functionality
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px",
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("data-section");
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    visibleSections.forEach((section) => {
      const element = sectionRefs.current[section]?.current;
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [visibleSections]);

  // Handle navigation click
  const handleNavClick = (section) => {
    const element = sectionRefs.current[section]?.current;
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(section);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderSection = (section) => {
    switch (section) {
      case "about":
        return (
          <AboutSection
            personal={personal}
            social={social}
            displayedText={displayedText}
            activeSection={activeSection}
          />
        );
      case "publications":
        return (
          <PublicationsSection
            publications={publications}
            personal={personal}
          />
        );
      case "talks":
        return <TalksSection talks={talks} />;
      case "education":
        return <EducationSection education={education} />;
      case "Experience":
        return <TeachingSection teaching={Experience} />;
      case "awards":
        return <AwardsSection awards={awards} />;
      default:
        return (
          <AboutSection
            personal={personal}
            social={social}
            displayedText={displayedText}
            activeSection={activeSection}
          />
        );
    }
  };

  const getSectionTitle = (section) => {
    switch (section) {
      case "publications":
        return "PUBLICATIONS";
      case "talks":
        return "TALKS";
      case "education":
        return "EDUCATION";
      case "Experience":
        return "EXPERIENCE";
      case "awards":
        return "AWARDS";
      default:
        return "";
    }
  };

  return (
    <div className="portfolio-container">
      {/* Mobile Menu Toggle Button */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
      >
        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-overlay overlay--visible"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Component */}
      <Sidebar
        personal={personal}
        visibleSections={visibleSections}
        activeSection={activeSection}
        handleNavClick={handleNavClick}
        isMobileMenuOpen={isMobileMenuOpen}
      />

      {/* Scrollable Main Content */}
      <div className="main-content">
        {visibleSections.map((section) => (
          <div
            key={section}
            ref={sectionRefs.current[section]}
            data-section={section}
            className="section-wrapper"
            id={section}
          >
            <div className="section-content">
              {getSectionTitle(section) && (
                <h2 className="section-header">{getSectionTitle(section)}</h2>
              )}
              {renderSection(section)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AcademicPortfolio;
