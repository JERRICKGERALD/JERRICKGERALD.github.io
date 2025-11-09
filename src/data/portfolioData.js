const myPortfolioData = {
  personal: {
    firstName: "Jerrick",
    lastName: "Gerald",
    title:
      "FIRST YEAR PHD, UNIVERSITY OF NOTRE DAME",
    email: "jgerald [at] nd [dot] edu / jerrick1105 [at] gmail [dot] com",
    profileImage: "/IMG_8197.jpg",
    bio: " Hi there 👋! I’m a Ph.D. student working with Prof. Nitesh Chawla, where my research lies at the intersection of representation learning, missing data, higher-order networks, and uncertainty in machine learning. I’m passionate about developing robust and expressive models that can navigate the challenges of incomplete data and uncover structure in complex relational systems. Before this, I completed my M.S. in Data Science at George Washington University and earned my B.E. in Computer Science from the College of Engineering, Guindy (Anna University). Looking forward to connecting—nice to e-meet you!",
  },
  education: [
    {
      id: "edu-1",
      institution: "University of Notre Dame",
      degree: "Ph.D",
      field: "Computer Science",
      startDate: "2025",
      endDate: "Present",
      advisor: "Nitesh V Chawla (ACM/AAAI/AAAS/IEEE fellow)",
      focus: "Representation Learning, Machine Learning, Higher Order Networks",
    },
    {
      id: "edu-2",
      institution: "The George Washington University",
      degree: "Master of Science",
      field: "Data Science",
      startDate: "2022",
      endDate: "2024",
      location: "Washington, DC",
      advisor: "Edwin Lo",
    },
    {
      id: "edu-3",
      institution: "College of Engineering Guindy, Anna University",
      degree: "Bachelor of Engineering",
      field: "Computer Science and Engineering",
      startDate: "2018",
      endDate: "2022",
      location: "Chennai, India",
      advisor: "Geetha Palanisamy",
    },
  ],

  publications: [
    {
      id: "pub-2",
      title:
        "Addressing health inequities through multimorbidity analysis: A fold change approach for targeted health policy interventions.",
      year: "2025",
      authors: ["Khvatskii, G., Gerald, J., García-Martínez, Á., Feldman, K., Burgos-Cardenas, Á. J., Buitrago Gutierrez, G., & Chawla, N. V. (2025)"],
      venue: "",
      description: "",
      links: {
        pdf: "#",
        arxiv: "#",
        code: "#",
        website: "",
      },
      // visual: {
      //   question: "What does a platypus look like?",
      //   highlightWord: "platypus",
      //   image: "",
      //   modelName: "",
      //   response: "A platypus looks like a beaver with a duck's bill",
      // },
      featured: true,
    },

    {
      id: "pub-3",
      title: "Semantic Framework for Query Synthesised 3D Scene Rendering",
      year: "2023",
      authors: [
        "Sri Gayatri Devi",
        "S Sowmiya Sree",
        "Jerrick Gerald",
        "Geetha Palanisamy",
      ],
      venue: "ICDIPV 2023",
      description:
        "This work presents an end-to-end model for novel view synthesis from a single image, eliminating the need for multi-view inputs or ground-truth 3D data. The model learns 3D-aware features through spatial feature extraction and depth map prediction. A query network generates the target view, while a refinement network inpaints missing regions to produce realistic outputs. The approach is trained and evaluated on the RealEstate10K and KITTI datasets, covering both indoor and outdoor scenes.",
      links: {
        pdf: "#",
        arxiv: "#",
        code: "#",
        website: "",
      },

      featured: true,
    },
  ],

  talks: [
    {
      id: "talk-1",
      title: "Lightning Talk - MCBK Global Lightning Talk ",
      // venue: "",
      // date: "",
      // location: "",
      // type: "",
      links: {
        // slides:"",
        // video:"",
      },
    },
  ],


  Experience: [
    {
      id: "teach-1",
      role: "Graduate Research Assistant - DIAL Lab",
      course: "University of Notre Dame, South Bend, IN",
      term: "Jan 2025 - Present",
      description:"",
    },

        {
      id: "teach-2",
      role: "Data Engineer 1 -  Intern",
      course: " Marlabs, Piscataway, NJ",
      term: "Jun 2024 - Dec 2024",

    },
            {
      id: "teach-2",
      role: "Undergraduate Research Assistant",
      course: "Solarillion Foundataion, Chennai, India",
      term: "May 19 - Feb 2022",
    },
            {
      role: "Machine learning Intern",
      course: " BUSoftTech, Chennai, India",
      term: "Jun 2021 - Aug 2021",

    }
  ],

  awards: [
    {
      id: "award-1",
      title: "Global Leaders Fellowship",
      issuer: "The George Washington University",
      date: "2022 - 2023",
    },
    {
      id: "award-2",
      title: "Global Leaders Fellowship",
      issuer: "The George Washington University",
      date: "2023 - 2024  ",
    }
  ],

  social: {
    github: "https://github.com/JERRICKGERALD",
    linkedin: "https://linkedin.com/in/jerrickgerald",
    scholar: "https://scholar.google.com/citations?user=gP2zJ7IAAAAJ&hl=en",

  },

  sectionVisibility: {
    about: true,
    publications: true,
    talks: true,
    education: true,
    Experience: true,
    awards: true,
  },

  sectionOrder: [
    "about",
    "education",
    "publications",
    "Experience",
    "awards",
    "talks",
  ],
};

export default myPortfolioData;
