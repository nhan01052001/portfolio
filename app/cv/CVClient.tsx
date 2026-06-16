"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const viData = {
  name: "Nguyễn Thành Nhân",
  title: "React Native Developer",
  phone: "+0373523365",
  dob: "01/05/2001",
  email: "nguyenthanhnhan01052001@gmail.com",
  location: "Hồ Chí Minh, Việt Nam",
  github: "github.com/nhan01052001",
  education: {
    degree: "Kỹ thuật Phần mềm",
    school: "ĐH Công nghiệp TP. HCM",
    duration: "2019 – 2023",
    extra: "Tiếng Anh: đọc và viết",
  },
  skills: [
    "React Native", "TypeScript", "JavaScript (ES6+)",
    "React", "Redux Toolkit", "React Query",
    "Node.js", "NestJS", "MySQL", "SQL Server",
    "Firebase (FCM)", "Google Maps API",
    "Git", "Docker", "Native Android (Java)",
    "Mobile UI Design", "Redux State Management",
    "API Integration", "CodePush (OTA)",
  ],
  summary:
    "React Native Developer với hơn 3 năm kinh nghiệm thực chiến phát triển và duy trì ứng dụng mobile production cho cả iOS và Android. Có kinh nghiệm xây dựng kiến trúc mobile mở rộng với React Native và TypeScript, tích hợp các dịch vụ bên thứ ba như cổng thanh toán, xác thực sinh trắc học, bản đồ và push notification. Luôn chủ động nghiên cứu công nghệ mới, có khả năng làm việc độc lập từ khởi tạo kiến trúc đến ship sản phẩm hoàn chỉnh.",
  experiences: [
    {
      role: "REACT NATIVE DEVELOPER",
      company: "CÔNG TY CỔ PHẦN TÀI NGUYÊN TRI THỨC VIỆT NĂNG",
      duration: "02/2023 – Hiện tại",
      items: [
        "Phát triển và duy trì ứng dụng mobile đa nền tảng (iOS & Android) sử dụng React Native và TypeScript",
        "Xây dựng tính năng mới, xử lý lỗi production và tối ưu hiệu năng ứng dụng",
        "Phối hợp với Backend, QA và Product để đảm bảo chất lượng và độ ổn định khi release",
        "Deploy và maintain ứng dụng trên App Store và Google Play",
        "Tích hợp Firebase, authentication, thanh toán, Google Maps, SignalR, Vision Camera và NFC",
        "Xử lý các tính năng đặc thù nền tảng với Native Android (Java)",
      ],
    },
    {
      role: "REACT NATIVE DEVELOPER",
      company: "NRJ Parking – Ứng dụng bãi đỗ xe thông minh",
      duration: "01/2026 – 03/2026",
      desc: "Ứng dụng giúp người dùng tìm kiếm, đặt chỗ và thanh toán bãi đỗ xe theo thời gian thực.",
      items: [
        "Tích hợp Google Maps cho tìm kiếm và điều hướng",
        "Implement QR code scanning cho check-in tự động",
        "Xây dựng hệ thống multi-payment (Viva Wallet, Apple Pay)",
        "Phát triển ví điện tử (auto top-up, theo dõi số dư)",
        "Tích hợp push notification (Firebase, Notifee)",
        "Hỗ trợ đa ngôn ngữ (i18n)",
      ],
    },
    {
      role: "REACT NATIVE DEVELOPER",
      company: "Sabeco OA – Ứng dụng nội bộ doanh nghiệp",
      duration: "",
      desc: "Ứng dụng nội bộ dành cho nhân viên Sabeco.",
      items: [
        "Xây dựng hệ thống đăng nhập và quản lý người dùng",
        "Phát triển tính năng check-in/check-out bằng GPS",
        "Tích hợp bản đồ cho các chức năng liên quan đến vị trí",
        "Tối ưu hiệu năng hiển thị danh sách dữ liệu lớn",
      ],
    },
    {
      role: "FULLSTACK DEVELOPER",
      company: "CodePush Server – Hệ thống OTA Update tự host",
      duration: "2024",
      desc: "Hệ thống OTA update self-host cho ứng dụng React Native.",
      items: [
        "Xây dựng dashboard quản lý deployment đa môi trường (Dev / Staging / Production)",
        "Phát triển backend API bằng NestJS",
        "Implement QR code deployment, JWT authentication, rollback & rollout",
        "Theo dõi và quản lý version deployment theo thời gian thực",
      ],
    },
  ],
  additional: [
    "Đã triển khai nhiều ứng dụng lên App Store và Google Play",
    "Chủ động học hỏi và liên tục nâng cao kỹ năng chuyên môn",
    "Có tinh thần trách nhiệm cao và khả năng làm việc dưới áp lực",
    "Thường xuyên nghiên cứu và áp dụng công nghệ mới vào sản phẩm",
    "Có khả năng làm việc độc lập, xây dựng project từ đầu đến hoàn thiện",
  ],
  labels: {
    summary: "TÓM TẮT",
    experience: "Kinh nghiệm làm việc",
    education: "Học vấn",
    skills: "Kỹ năng",
    additional: "Thông tin thêm",
    desc: "Mô tả:",
    resp: "Trách nhiệm chính:",
  },
};

const enData = {
  name: "Nguyen Thanh Nhan",
  title: "React Native Developer",
  phone: "+84 373 523 365",
  dob: "May 1, 2001",
  email: "nguyenthanhnhan01052001@gmail.com",
  location: "Ho Chi Minh City, Vietnam",
  github: "github.com/nhan01052001",
  education: {
    degree: "Software Engineering",
    school: "Ho Chi Minh City University of Industry",
    duration: "2019 – 2023",
    extra: "English: reading & writing",
  },
  skills: [
    "React Native", "TypeScript", "JavaScript (ES6+)",
    "React", "Redux Toolkit", "React Query",
    "Node.js", "NestJS", "MySQL", "SQL Server",
    "Firebase (FCM)", "Google Maps API",
    "Git", "Docker", "Native Android (Java)",
    "Mobile UI Design", "Redux State Management",
    "API Integration", "CodePush (OTA)",
  ],
  summary:
    "React Native Developer with over 3 years of hands-on experience building and maintaining production mobile applications for iOS and Android. Proficient in architecting scalable React Native + TypeScript solutions, integrating third-party services such as payment gateways, biometric authentication, maps, and push notifications. A self-driven learner who works independently — from architecture setup to shipping polished products.",
  experiences: [
    {
      role: "REACT NATIVE DEVELOPER",
      company: "Tai Nguyen Tri Thuc Viet Nang JSC",
      duration: "Feb 2023 – Present",
      items: [
        "Developed and maintained cross-platform mobile apps (iOS & Android) using React Native & TypeScript",
        "Built new features, resolved production bugs, and optimized application performance",
        "Collaborated with Backend, QA, and Product teams to ensure release quality and stability",
        "Deployed and maintained apps on App Store and Google Play",
        "Integrated Firebase, authentication, payments, Google Maps, SignalR, Vision Camera, and NFC",
        "Handled platform-specific features using Native Android (Java)",
      ],
    },
    {
      role: "REACT NATIVE DEVELOPER",
      company: "NRJ Parking – Smart Parking App",
      duration: "Jan 2026 – Mar 2026",
      desc: "An app helping users find, book, and pay for parking spots in real-time.",
      items: [
        "Integrated Google Maps for search and navigation",
        "Implemented QR code scanning for automatic check-in",
        "Built a multi-payment system (Viva Wallet, Apple Pay)",
        "Developed a digital wallet with auto top-up and balance tracking",
        "Integrated push notifications (Firebase, Notifee)",
        "Multi-language support (i18n)",
      ],
    },
    {
      role: "REACT NATIVE DEVELOPER",
      company: "Sabeco OA – Internal Enterprise App",
      duration: "",
      desc: "Internal application for Sabeco employees.",
      items: [
        "Built login and user management system",
        "Developed GPS-based check-in/check-out feature",
        "Integrated maps for location-based functionalities",
        "Optimized performance for rendering large data lists",
      ],
    },
    {
      role: "FULLSTACK DEVELOPER",
      company: "CodePush Server – Self-hosted OTA Update System",
      duration: "2024",
      desc: "A self-hosted OTA update system for React Native apps.",
      items: [
        "Built a deployment management dashboard (Dev / Staging / Production)",
        "Developed backend API with NestJS",
        "Implemented QR code deployment, JWT authentication, rollback & rollout",
        "Real-time version deployment tracking and management",
      ],
    },
  ],
  additional: [
    "Shipped multiple applications on App Store and Google Play",
    "Proactively learns and continuously improves technical skills",
    "Strong sense of responsibility and ability to work under pressure",
    "Regularly researches and applies emerging technologies to products",
    "Capable of working independently — building projects from scratch to delivery",
  ],
  labels: {
    summary: "SUMMARY",
    experience: "Work Experience",
    education: "Education",
    skills: "Skills",
    additional: "Additional Information",
    desc: "Description:",
    resp: "Key Responsibilities:",
  },
};

export default function CVClient() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "vi" ? "vi" : "en";
  const autoprint = searchParams.get("autoprint");
  const d = lang === "vi" ? viData : enData;

  useEffect(() => {
    if (autoprint === "true") {
      const timer = setTimeout(() => window.print(), 900);
      return () => clearTimeout(timer);
    }
  }, [autoprint]);

  return (
    <>
      <style>{`
        @page { size: A4; margin: 0; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
        body { margin: 0; }
        @media print {
          html, body { width: 210mm; height: 297mm; }
          .no-print { display: none !important; }
          .cv-root { box-shadow: none !important; }
        }
      `}</style>

      {/* Back button – hidden on print */}
      <div className="no-print fixed top-4 left-4 z-50">
        <button
          onClick={() => window.close()}
          className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-600 hover:text-gray-900 shadow-sm"
        >
          ← Đóng
        </button>
      </div>

      <div className="min-h-screen bg-gray-100 flex items-start justify-center py-8 no-print-bg">
        <div
          className="cv-root bg-white shadow-2xl"
          style={{ width: "210mm", minHeight: "297mm", display: "flex", fontFamily: "'Segoe UI', Arial, sans-serif", fontSize: "10pt" }}
        >
          {/* LEFT SIDEBAR */}
          <div
            style={{
              width: "82mm",
              minHeight: "297mm",
              background: "#3a2c2c",
              color: "#f0ebe5",
              padding: "28px 20px",
              flexShrink: 0,
              boxSizing: "border-box",
            }}
          >
            {/* Avatar */}
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
              <div style={{ width: "100px", height: "100px", borderRadius: "50%", overflow: "hidden", border: "3px solid #c5a87a" }}>
                <Image src="/avatar.jpg" alt={d.name} width={100} height={100} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>

            {/* Name & Title */}
            <div style={{ textAlign: "center", marginBottom: "22px" }}>
              <div style={{ fontWeight: 700, fontSize: "14pt", lineHeight: 1.3, color: "#fff" }}>{d.name}</div>
              <div style={{ fontSize: "9pt", color: "#c5a87a", marginTop: "5px" }}>{d.title}</div>
            </div>

            {/* Contact */}
            <SideSection label={lang === "vi" ? "Liên hệ" : "Contact"}>
              <SideItem icon="📞" text={d.phone} />
              <SideItem icon="🎂" text={d.dob} />
              <SideItem icon="✉️" text={d.email} small />
              <SideItem icon="📍" text={d.location} />
              <SideItem icon="🔗" text={d.github} small />
            </SideSection>

            {/* Education */}
            <SideSection label={d.labels.education}>
              <div style={{ marginTop: "4px" }}>
                <div style={{ fontWeight: 600, fontSize: "9.5pt", color: "#fff" }}>{d.education.degree}</div>
                <div style={{ fontSize: "8.5pt", color: "#c5a87a", margin: "2px 0" }}>{d.education.duration}</div>
                <div style={{ fontSize: "8.5pt", color: "#d4c4b0" }}>{d.education.school}</div>
                <div style={{ fontSize: "8pt", color: "#b0a090", marginTop: "4px" }}>{d.education.extra}</div>
              </div>
            </SideSection>

            {/* Skills */}
            <SideSection label={d.labels.skills}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginTop: "4px" }}>
                {d.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "rgba(197,168,122,0.15)",
                      border: "1px solid rgba(197,168,122,0.35)",
                      color: "#e8d5ba",
                      padding: "2px 7px",
                      borderRadius: "4px",
                      fontSize: "7.5pt",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </SideSection>
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1, padding: "28px 24px", boxSizing: "border-box" }}>
            {/* Summary */}
            <ContentSection label={d.labels.summary}>
              <p style={{ color: "#444", lineHeight: 1.65, margin: 0 }}>{d.summary}</p>
            </ContentSection>

            {/* Experience */}
            <ContentSection label={d.labels.experience}>
              {d.experiences.map((exp, i) => (
                <div key={i} style={{ marginBottom: i < d.experiences.length - 1 ? "16px" : 0 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{ fontWeight: 700, fontSize: "9.5pt", color: "#2d2d2d" }}>{exp.role}</span>
                    {exp.duration && (
                      <span style={{ fontSize: "8pt", color: "#888", whiteSpace: "nowrap", marginLeft: "8px" }}>{exp.duration}</span>
                    )}
                  </div>
                  <div style={{ fontSize: "8.5pt", color: "#666", marginBottom: "5px", fontStyle: "italic" }}>{exp.company}</div>
                  {exp.desc && (
                    <div style={{ fontSize: "8.5pt", color: "#555", marginBottom: "4px" }}>
                      <span style={{ fontWeight: 600 }}>{d.labels.desc}</span> {exp.desc}
                    </div>
                  )}
                  <div style={{ fontSize: "8.5pt", fontWeight: 600, color: "#444", marginBottom: "3px" }}>{d.labels.resp}</div>
                  <ul style={{ margin: 0, paddingLeft: "14px", color: "#555" }}>
                    {exp.items.map((item, j) => (
                      <li key={j} style={{ marginBottom: "2px", lineHeight: 1.5 }}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </ContentSection>

            {/* Additional */}
            <ContentSection label={d.labels.additional}>
              <ul style={{ margin: 0, paddingLeft: "14px", color: "#555" }}>
                {d.additional.map((item, i) => (
                  <li key={i} style={{ marginBottom: "3px", lineHeight: 1.55 }}>{item}</li>
                ))}
              </ul>
            </ContentSection>
          </div>
        </div>
      </div>
    </>
  );
}

function SideSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "18px" }}>
      <div
        style={{
          background: "#c5a87a",
          color: "#3a2c2c",
          fontWeight: 700,
          fontSize: "8.5pt",
          letterSpacing: "0.8px",
          textTransform: "uppercase",
          padding: "3px 10px",
          borderRadius: "4px",
          marginBottom: "10px",
          display: "inline-block",
        }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}

function SideItem({ icon, text, small }: { icon: string; text: string; small?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "7px", marginBottom: "7px" }}>
      <span style={{ fontSize: "9pt", flexShrink: 0, marginTop: "1px" }}>{icon}</span>
      <span style={{ fontSize: small ? "7.5pt" : "8.5pt", color: "#ddd0c0", lineHeight: 1.4, wordBreak: "break-all" }}>{text}</span>
    </div>
  );
}

function ContentSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
        <span
          style={{
            background: "#c5a87a",
            color: "#fff",
            fontWeight: 700,
            fontSize: "9pt",
            letterSpacing: "0.5px",
            padding: "3px 12px",
            borderRadius: "4px",
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <div style={{ flex: 1, height: "1px", background: "#e0d4c0" }} />
      </div>
      {children}
    </div>
  );
}
