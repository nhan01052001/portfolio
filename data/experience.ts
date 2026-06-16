import { Lang } from "@/context/LanguageContext";

const data = {
  vi: [
    {
      id: "1",
      company: "Công ty Cổ phần Tài Nguyên Tri Thức Việt Năng",
      position: "React Native Developer",
      duration: "02/2023 - Hiện tại",
      startDate: "Tháng 2/2023",
      endDate: "Hiện tại",
      current: true,
      responsibilities: [
        "Phát triển và duy trì ứng dụng mobile đa nền tảng (iOS & Android) sử dụng React Native và TypeScript",
        "Xây dựng tính năng mới, xử lý lỗi production và tối ưu hiệu năng ứng dụng",
        "Phối hợp với Backend, QA và Product để đảm bảo chất lượng và độ ổn định khi release",
        "Deploy và maintain ứng dụng trên App Store và Google Play",
        "Tích hợp các dịch vụ bên thứ 3: Firebase (FCM), authentication, thanh toán và Google Maps",
        "Xử lý các tính năng đặc thù nền tảng với Native Android (Java)",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "NestJS", "Node.js"],
    },
  ],
  en: [
    {
      id: "1",
      company: "Tai Nguyen Tri Thuc Viet Nang JSC",
      position: "React Native Developer",
      duration: "Feb 2023 - Present",
      startDate: "February 2023",
      endDate: "Present",
      current: true,
      responsibilities: [
        "Developed and maintained cross-platform mobile applications (iOS & Android) using React Native and TypeScript",
        "Built new features, handled production bugs, and optimized app performance",
        "Collaborated with Backend, QA, and Product teams to ensure release quality and stability",
        "Deployed and maintained applications on App Store and Google Play",
        "Integrated third-party services: Firebase (FCM), authentication, payment gateways, and Google Maps",
        "Handled platform-specific features using Native Android (Java)",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "NestJS", "Node.js"],
    },
  ],
};

export function getExperiences(lang: Lang) {
  return data[lang];
}
