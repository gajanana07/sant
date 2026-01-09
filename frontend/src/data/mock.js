export const portfolioData = {
  personal: {
    name: "Santosh B",
    tagline: "Software Engineer | Backend & DevOps | DSA Enthusiast",
    summary:
      "I'm a Computer Science student at BMS College of Engineering with a strong foundation in cloud technologies, and system design. My journey in tech has been driven by curiosity and a passion for solving complex problems. With hands-on experience in containerization, orchestration, and MLOps, I've built and deployed scalable applications using modern tech stacks. Beyond coding, I've taken on leadership roles, mentored peers, and contributed to technical communities. I believe in continuous learning and pushing boundaries to create impactful solutions.",
    email: "santoshbudagavi@gmail.com",
    phone: "+91 9353902654",
    linkedin: "https://linkedin.com/in/santosh-budagavi",
    github: "https://github.com/Santosh26b",
    codelio: "https://codolio.com/profile/KFuVnUII",
    location: "Bengaluru, Karnataka",
  },

  about: {
    title: "About Me",
    description:
      "I'm a Computer Science student at BMS College of Engineering with a strong foundation in backend development, cloud technologies, and system design. My journey in tech has been driven by curiosity and a passion for solving complex problems. With hands-on experience in containerization, orchestration, and MLOps, I've built and deployed scalable applications using modern tech stacks. Beyond coding, I've taken on leadership roles, mentored peers, and contributed to technical communities. I believe in continuous learning and pushing boundaries to create impactful solutions.",
  },

  experience: [
    {
      id: 1,
      title: "Intern",
      organization: "Dell Technologies",
      duration: "May 2025 - July 2025",
      type: "Internship",
      contributions: [
        "Worked on containerization and orchestration technologies including Docker, Kubernetes, Helm charts, and Ansible",
        "Automated deployment workflows to enhance infrastructure scalability",
        "Collaborated with cross-functional teams on cloud-native solutions",
      ],
      images: ["/int1.jpeg", "/int2.png"],
    },
    {
      id: 2,
      title: "Campus Ambassador",
      organization: "Dell Technologies",
      duration: "Jan 2025 - May 2025",
      type: "Leadership",
      contributions: [
        "Selected as one of 35 Dell Campus Ambassadors across India (Batch 25)",
        "Represented Dell on campus and promoted technology events",
        "Engaged with student communities to foster tech awareness",
      ],
      images: ["/camp1.jpeg", "/camp2.jpeg"],
    },
    {
      id: 3,
      title: "Senior Core Member",
      organization: "Protocol Club, BMSCE",
      duration: "June 2024 - April 2025",
      type: "Leadership",
      contributions: [
        "Led and managed technical and non-technical initiatives",
        "Mentored junior members on technical skills and project development",
        "Coordinated major college events like Phase Shift, Protocol Week, and Farouche",
      ],
      images: ["/sen1.jpeg", "/sen2.jpeg"],
    },
    {
      id: 4,
      title: "Mentor",
      organization: "LeapCode Event",
      duration: "Aug 2024 - Aug 2025",
      type: "Mentorship",
      contributions: [
        "Guided participants through problem-solving strategies",
        "Conducted sessions on competitive programming and DSA",
        "Helped students debug and optimize their code",
      ],
      images: ["/leap2.jpeg", "/leap22.jpeg"],
    },
  ],

  projects: [
    {
      id: 1,
      name: "Network Security using MLOps",
      description:
        "Real-time phishing URL detection system with end-to-end automated MLOps pipeline, featuring data versioning, experiment tracking, and drift-aware retraining.",
      problem:
        "Detecting phishing URLs in real-time to prevent security threats",
      techStack: [
        "Python",
        "Machine Learning",
        "FastAPI",
        "Docker",
        "AWS ECR",
        "AWS EC2",
      ],
      features: [
        "Trained on 11,000+ URLs with lexical, domain, and HTML/JavaScript features",
        "End-to-end MLOps pipeline with CI/CD automation",
        "Containerized deployment on AWS EC2 via Docker and ECR",
        "Model versioning and drift-aware retraining",
      ],
      github: "https://github.com/Santosh26b/network-security",
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      name: "VProfile Application",
      description:
        "Multi-tier web application deployed on AWS with NGINX, Apache Tomcat, RabbitMQ, and Memcached for high availability and modular architecture.",
      problem:
        "Building a scalable, highly available web application infrastructure",
      techStack: [
        "AWS",
        "EC2",
        "NGINX",
        "Apache Tomcat",
        "NFS",
        "RabbitMQ",
        "Memcached",
      ],
      features: [
        "NGINX as reverse proxy for load balancing",
        "Apache Tomcat for application server",
        "RabbitMQ for asynchronous message queuing",
        "Memcached for efficient data caching",
        "NFS for shared storage across instances",
      ],
      github: "https://github.com/Santosh26b/vprofile",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      name: "Book Recommender System",
      description:
        "Intelligent book recommendation system using cosine similarity to suggest top 5 similar books based on user ratings and book features.",
      problem:
        "Helping users discover books aligned with their reading preferences",
      techStack: ["Python", "Cosine Similarity", "Pandas", "NumPy"],
      features: [
        "Cosine similarity-based recommendation engine",
        "Processed user ratings for personalized results",
        "Top 5 similar books suggestion algorithm",
        "Efficient vector computation for real-time recommendations",
      ],
      github: "https://github.com/Santosh26b/book-recommender",
      color: "from-green-500 to-teal-500",
    },
  ],

  skills: {
    languages: ["Java", "Python", "C", "Bash"],
    backend: ["FastAPI", "REST APIs", "System Design", "MLOps"],
    cloud: ["AWS", "Docker", "Kubernetes", "Jenkins", "Ansible", "Helm"],
    databases: ["SQL","PostgreSQL", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code", "Linux"],
    dataAnalysis: ["Pandas", "NumPy"],
  },

  achievements: [
    {
      id: 1,
      title: "1000+ DSA Problems Solved",
      description:
        "Solved problems across LeetCode, GeeksforGeeks, CodeStudio, and InterviewBit",
      icon: "Code2",
    },
    {
      id: 2,
      title: "20 LeetCode Badges",
      description:
        "Earned badges for consistent problem-solving and contest participation",
      icon: "Award",
    },
    {
      id: 3,
      title: "Dell Campus Ambassador",
      description: "Selected among 35 ambassadors across India (Batch 25)",
      icon: "Users",
    },
    {
      id: 4,
      title: "30,000+ LinkedIn Impressions",
      description:
        "Built strong professional network and shared valuable tech content",
      icon: "TrendingUp",
    },
    {
      id: 5,
      title: "9.56 CGPA",
      description:
        "Maintaining academic excellence at BMS College of Engineering",
      icon: "GraduationCap",
    },
    {
      id: 6,
      title: "148 WPM Typing Speed",
      description: "Highest: 148 WPM, Average: 90 WPM on Type Racing",
      icon: "Zap",
    },
  ],

  education: [
    {
      institution: "BMS College of Engineering",
      degree: "Bachelor of Engineering in Computer Science",
      duration: "Dec 2022 - June 2026",
      grade: "CGPA: 9.56",
      location: "Bengaluru, Karnataka",
    },
    {
      institution: "Sri Chaitanya PU College",
      degree: "Pre-University (PCMB)",
      duration: "June 2020 - May 2022",
      grade: "Percentage: 97.7%",
      location: "Ballari, Karnataka",
    },
  ],
};
