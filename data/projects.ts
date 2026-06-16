import { Lang } from "@/context/LanguageContext";

interface ProjectItem {
  id: string;
  name: string;
  description: string;
  role: string;
  duration: string;
  features: string[];
  technologies: string[];
  thumbnail: string;
  appStore?: string;
  playStore?: string;
  github?: string;
  demo?: string;
}

const data: Record<Lang, ProjectItem[]> = {
  vi: [
    {
      id: "4",
      name: "VnResource HRM – Cổng nhân sự doanh nghiệp",
      description:
        "Ứng dụng HRM di động cho Công ty CP Tài Nguyên Tri Thức Việt Nam, phục vụ hàng nghìn nhân viên với đầy đủ tính năng quản lý nhân sự: chấm công, phê duyệt, giao việc và giao tiếp nội bộ.",
      role: "React Native Developer",
      duration: "2023 - Hiện tại",
      features: [
        "Chấm công đa hình thức: nhận diện khuôn mặt (Vision Camera), QR code, NFC và GPS",
        "Xác thực sinh trắc học (Face ID / Fingerprint) cho đăng nhập bảo mật",
        "Hệ thống phê duyệt đa cấp: nghỉ phép, tăng ca, công tác, đổi ca",
        "Quản lý công việc & giao việc với theo dõi tiến độ theo thời gian thực (SignalR)",
        "Nhắn tin nội bộ và thông báo đẩy qua Firebase Messaging",
        "Xem & tải tài liệu, upload file lên Firebase Storage",
        "Theo dõi vị trí địa lý khi chấm công ngoài văn phòng (react-native-maps, geolib)",
        "Đánh giá hiệu suất nhân viên và báo cáo KPI",
        "Lịch làm việc động với bộ lọc nâng cao và form builder linh hoạt",
      ],
      technologies: [
        "React Native", "TypeScript", "Redux", "Firebase",
        "SignalR", "Vision Camera", "NFC", "Google Maps API",
        "Biometrics", "Lottie",
      ],
      thumbnail: "/projects/vnresource-hrm.png",
    },
    {
      id: "1",
      name: "NRJ Parking – Ứng dụng bãi đỗ xe thông minh",
      description:
        "Ứng dụng giúp người dùng tìm kiếm, đặt chỗ và thanh toán bãi đỗ xe theo thời gian thực. Tích hợp đa phương thức thanh toán và ví điện tử.",
      role: "React Native Developer",
      duration: "01/2026 - 03/2026",
      features: [
        "Tìm kiếm bãi đỗ xe và đặt chỗ theo thời gian thực",
        "Quản lý phiên gửi xe với countdown session tự động",
        "Tích hợp Google Maps cho tìm kiếm và điều hướng",
        "QR code scanning cho check-in tự động",
        "Hệ thống multi-payment: Viva Wallet & Apple Pay",
        "Ví điện tử với auto top-up và theo dõi số dư",
        "Push notification qua Firebase & Notifee",
        "Quản lý phương tiện (multi-vehicle support)",
        "Hỗ trợ đa ngôn ngữ (i18n)",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "Google Maps API", "Notifee"],
      thumbnail: "/projects/nrj-parking.png",
    },
    {
      id: "2",
      name: "Sabeco OA – Ứng dụng nội bộ doanh nghiệp",
      description:
        "Ứng dụng nội bộ dành cho nhân viên Sabeco với hệ thống check-in/check-out GPS, quản lý người dùng và các chức năng liên quan đến vị trí.",
      role: "React Native Developer",
      duration: "2023 - 2024",
      features: [
        "Hệ thống đăng nhập và quản lý người dùng",
        "Check-in / Check-out bằng GPS",
        "Tích hợp bản đồ cho các chức năng vị trí",
        "Tối ưu hiệu năng hiển thị danh sách dữ liệu lớn",
      ],
      technologies: ["React Native", "TypeScript", "Google Maps API", "GPS", "Redux Toolkit"],
      thumbnail: "/projects/sabeco-oa.png",
    },
    {
      id: "3",
      name: "CodePush Server – Hệ thống OTA Update tự host",
      description:
        "Hệ thống OTA update self-host cho React Native thay thế Microsoft CodePush. Dashboard quản lý deployment đầy đủ tính năng với rollback và theo dõi version.",
      role: "Fullstack Developer",
      duration: "2024",
      features: [
        "Dashboard quản lý deployment đa môi trường (Dev / Staging / Production)",
        "QR code deployment cho testing nhanh",
        "JWT authentication & phân quyền người dùng",
        "Rollback & rollout theo version",
        "Theo dõi và quản lý version deployment theo thời gian thực",
        "Backend API xây dựng bằng NestJS",
      ],
      technologies: ["React Native", "NestJS", "Node.js", "TypeScript", "MySQL", "JWT", "Docker"],
      thumbnail: "/projects/codepush-server.png",
      github: "https://github.com/nhan01052001",
    },
  ],
  en: [
    {
      id: "4",
      name: "VnResource HRM – Enterprise HR Portal",
      description:
        "A mobile HRM application for VnResource JSC, serving thousands of employees with full HR management capabilities: attendance tracking, approvals, task delegation, and internal communications.",
      role: "React Native Developer",
      duration: "2023 - Present",
      features: [
        "Multi-modal attendance: face recognition (Vision Camera), QR code, NFC, and GPS check-in",
        "Biometric authentication (Face ID / Fingerprint) for secure login",
        "Multi-level approval workflows: leave, overtime, business trips, shift swaps",
        "Task management & assignment with real-time progress tracking (SignalR)",
        "Internal messaging and push notifications via Firebase Messaging",
        "Document viewer & uploader with Firebase Storage integration",
        "Geolocation tracking for off-site attendance (react-native-maps, geolib)",
        "Employee performance evaluation and KPI reporting",
        "Dynamic work calendar with advanced filters and a flexible form builder",
      ],
      technologies: [
        "React Native", "TypeScript", "Redux", "Firebase",
        "SignalR", "Vision Camera", "NFC", "Google Maps API",
        "Biometrics", "Lottie",
      ],
      thumbnail: "/projects/vnresource-hrm.png",
    },
    {
      id: "1",
      name: "NRJ Parking – Smart Parking App",
      description:
        "An app helping users find, book, and pay for parking spots in real-time. Features a multi-payment system and digital wallet.",
      role: "React Native Developer",
      duration: "01/2026 - 03/2026",
      features: [
        "Real-time parking search and spot booking",
        "Session management with automatic countdown",
        "Google Maps integration for search and navigation",
        "QR code scanning for automatic check-in",
        "Multi-payment system: Viva Wallet & Apple Pay",
        "Digital wallet with auto top-up and balance tracking",
        "Push notifications via Firebase & Notifee",
        "Multi-vehicle management support",
        "Multi-language support (i18n)",
      ],
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "Google Maps API", "Notifee"],
      thumbnail: "/projects/nrj-parking.png",
    },
    {
      id: "2",
      name: "Sabeco OA – Internal Enterprise App",
      description:
        "An internal application for Sabeco employees featuring GPS-based check-in/out, user management, and location-based functionalities.",
      role: "React Native Developer",
      duration: "2023 - 2024",
      features: [
        "Login system and user management",
        "GPS-based check-in / check-out",
        "Map integration for location features",
        "Performance optimization for large data list rendering",
      ],
      technologies: ["React Native", "TypeScript", "Google Maps API", "GPS", "Redux Toolkit"],
      thumbnail: "/projects/sabeco-oa.png",
    },
    {
      id: "3",
      name: "CodePush Server – Self-hosted OTA Update System",
      description:
        "A self-hosted OTA update system for React Native apps, replacing Microsoft CodePush. Full-featured deployment dashboard with rollback and version tracking.",
      role: "Fullstack Developer",
      duration: "2024",
      features: [
        "Multi-environment deployment dashboard (Dev / Staging / Production)",
        "QR code deployment for quick testing",
        "JWT authentication & user role management",
        "Version rollback & rollout",
        "Real-time version deployment tracking",
        "Backend API built with NestJS",
      ],
      technologies: ["React Native", "NestJS", "Node.js", "TypeScript", "MySQL", "JWT", "Docker"],
      thumbnail: "/projects/codepush-server.png",
      github: "https://github.com/nhan01052001",
    },
  ],
};

export function getProjects(lang: Lang) {
  return data[lang];
}
