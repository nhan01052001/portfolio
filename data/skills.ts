import { Lang } from "@/context/LanguageContext";

const skillCategories = {
  vi: [
    { category: "Mobile", skills: ["React Native", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "React Query", "React Navigation"] },
    { category: "Backend", skills: ["Node.js", "NestJS", "MySQL", "SQL Server", "REST API", "JWT"] },
    { category: "Tích hợp & Dịch vụ", skills: ["Firebase (FCM)", "Google Maps API", "Viva Wallet", "Apple Pay", "Notifee", "i18n"] },
    { category: "UI / Design", skills: ["Mobile UI Design", "React", "HTML5", "CSS3", "Figma"] },
    { category: "Công cụ & DevOps", skills: ["Git", "CodePush (OTA)", "App Store Connect", "Google Play Console", "Docker", "Native Android (Java)"] },
  ],
  en: [
    { category: "Mobile", skills: ["React Native", "TypeScript", "JavaScript (ES6+)", "Redux Toolkit", "React Query", "React Navigation"] },
    { category: "Backend", skills: ["Node.js", "NestJS", "MySQL", "SQL Server", "REST API", "JWT"] },
    { category: "Integration & Services", skills: ["Firebase (FCM)", "Google Maps API", "Viva Wallet", "Apple Pay", "Notifee", "i18n"] },
    { category: "UI / Design", skills: ["Mobile UI Design", "React", "HTML5", "CSS3", "Figma"] },
    { category: "Tools & DevOps", skills: ["Git", "CodePush (OTA)", "App Store Connect", "Google Play Console", "Docker", "Native Android (Java)"] },
  ],
};

const achievements = {
  vi: [
    {
      id: "1",
      title: "3+ năm React Native Production",
      description: "Hơn 3 năm kinh nghiệm phát triển và duy trì ứng dụng mobile production cho iOS & Android.",
    },
    {
      id: "2",
      title: "Deploy thành công lên App Store & Google Play",
      description: "Đã release nhiều ứng dụng thành công lên cả hai nền tảng, từ build đến submit.",
    },
    {
      id: "3",
      title: "Tích hợp hệ thống đa thanh toán",
      description: "Tích hợp thành công Viva Wallet, Apple Pay và cổng thanh toán nội địa trong cùng một ứng dụng.",
    },
    {
      id: "4",
      title: "Tự xây dựng CodePush Server",
      description: "Thiết kế và phát triển hệ thống OTA update self-hosted thay thế Microsoft CodePush cho toàn bộ dự án.",
    },
    {
      id: "5",
      title: "Năng lực Fullstack",
      description: "Có khả năng đảm nhận cả frontend mobile (React Native) và backend (NestJS, Node.js, MySQL).",
    },
  ],
  en: [
    {
      id: "1",
      title: "3+ Years React Native in Production",
      description: "Over 3 years developing and maintaining production mobile applications for iOS & Android.",
    },
    {
      id: "2",
      title: "Shipped Apps on App Store & Google Play",
      description: "Successfully released multiple applications on both platforms, from build to store submission.",
    },
    {
      id: "3",
      title: "Multi-payment System Integration",
      description: "Successfully integrated Viva Wallet, Apple Pay, and local payment gateways in a single application.",
    },
    {
      id: "4",
      title: "Built Self-hosted CodePush Server",
      description: "Designed and developed a self-hosted OTA update system replacing Microsoft CodePush across all projects.",
    },
    {
      id: "5",
      title: "Fullstack Capability",
      description: "Able to handle both mobile frontend (React Native) and backend (NestJS, Node.js, MySQL).",
    },
  ],
};

export function getSkillCategories(lang: Lang) {
  return skillCategories[lang];
}

export function getAchievements(lang: Lang) {
  return achievements[lang];
}
