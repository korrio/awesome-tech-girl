// Shared by scripts/build-readme.js (Node) and public/index.html (browser).
const CATEGORIES = [
  { id: "SOFTWARE_ENGINEERING", title: "Software Engineering" },
  { id: "FRONTEND_WEB", title: "Frontend & Web" },
  { id: "AI_ML", title: "AI & Machine Learning" },
  { id: "INFRA_DEVOPS", title: "Infrastructure, Cloud & DevOps" },
  { id: "SECURITY", title: "Security" },
  { id: "DATA", title: "Data" },
  { id: "DESIGN_ENGINEERING", title: "Design Engineering & Product" },
  { id: "DEVREL_EDUCATION", title: "DevRel & Education" },
  { id: "FOUNDERS_LEADERS", title: "Founders & Leaders" },
  { id: "WEB3", title: "Web3" },
];

const TAGS = {
  oss: "🌱 open source",
  speaker: "🎤 speaker",
  writer: "✍️ writer",
  builder: "🛠️ builds in public",
  founder: "🚀 founder",
  teacher: "📚 teacher",
  thai: "🇹🇭 Thai",
  romanian: "🇷🇴 Romanian",
};

if (typeof module !== "undefined") module.exports = { CATEGORIES, TAGS };
