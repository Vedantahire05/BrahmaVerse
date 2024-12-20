import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    // title: "Features",
    // url: "#features",
    title: "Games",
    url: "#features"
  },
  {
    id: "1",
    title: "Features",
    url: "#how-to-use",
  },
  {
    id: "2",
    title: "Pricing",
    url: "#pricing",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Explore games like Kanche and Lagori",
  "Learn rules and strategies with ease",
  "Discover the history behind each game.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Personalized Cultural Chatbot",
    text: "Future updates will feature a smart chatbot to answer queries, explain games, and provide tailored cultural experiences, making traditions more interactive and accessible.",
    date: "Nov 2024",
    status: "progress",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Chatbot Customization",
    text: "BrahmaVerse will feature a customizable chatbot that can answer any cultural or gameplay-related questions. It will also support voice recognition, enabling seamless, conversational interactions for an immersive user experience.",
    date: "Nov 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Personalized Cultural Videos",
    text: "BrahmaVerse will feature tailored videos that explore the history, gameplay, and significance of traditional games, offering a unique, immersive experience",
    date: "Nov 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Immersive AR/VR Experiences",
    text: "Future updates will bring AR/VR integration to BrahmaVerse, allowing users to experience traditional games in an interactive, 3D environment. These technologies will enable lifelike gameplay, cultural storytelling, and virtual exploration of India’s rich heritage",
    date: "Nov 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Effortlessly connect with India’s cultural essence through our immersive platform.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
    text : "AI-powered insights bring traditional games and stories to life",
  },
  {
    id: "2",
    title: "Top-notch Security",
    text : "Preserving the authenticity of India’s heritage with cutting-edge safety measures.",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Free Tutorials, Access to limited games",
    price: "0",
    features: [
      "Access to 6 traditional games",
      "Basic gameplay tutorials and rules",
      "Community forum access for discussions",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, analytics dashboard",
    price: "499",
    features: [
      "Access to Advanced AI Chatbot",
      "Advanced gameplay tutorials and strategy tips",
      "Access to all traditional games in the library",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Access to AR/VR, Custom AI chatbot, Advanced analytics",
    price: "999",
    features: [
      "Experience traditional games through AR/VR",
      "Access to detailed analytics and performance tracking",
      "Access to custom chatbot",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Gilli Danda",
    text: "A classic Indian game of skill, played with a stick and a wooden peg, celebrated across generations.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Kanche",
    text: "A timeless game of marbles, testing aim and strategy, loved by children across generations.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Lagori",
    text: "A team game where players knock down a stack of stones and try to rebuild it while avoiding the opposing team’s throws.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Kho-Kho",
    text: "A fast-paced team game where players chase and tag opponents, testing speed, agility, and strategy.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Chaupar",
    text: "An ancient board game of strategy, played with dice and pieces, once enjoyed by royalty in India.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "HopsCotch",
    text: "A popular children's game where players hop through a numbered grid, testing balance and coordination.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "LinkedIn",
    iconUrl: discordBlack,
    url: "https://linktr.ee/brahmaverse",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "https://linktr.ee/brahmaverse",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "https://linktr.ee/brahmaverse",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://linktr.ee/brahmaverse",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "https://linktr.ee/brahmaverse",
  },
];
