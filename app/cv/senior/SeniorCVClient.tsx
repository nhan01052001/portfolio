"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

const PEACH = "#E09B7A";
const PEACH_LIGHT = "#F5DDD0";
const DARK = "#222";
const GRAY = "#4a4a4a";
const LIGHT_GRAY = "#777";

/* ─── DATA ─────────────────────────────────────────────── */
const vi = {
  firstName: "NGUYỄN THÀNH",
  lastName: "NHÂN",
  title: "React Native Developer",
  contact: {
    dob: "01/05/2001",
    phone: "+0373523365",
    email: "nguyenthanhnhan01052001@gmail.com",
    location: "Hồ Chí Minh, Việt Nam",
    github: "github.com/nhan01052001",
  },
  profile:
    "React Native Developer với hơn 3 năm kinh nghiệm thực chiến phát triển ứng dụng mobile production cho iOS & Android. Thành thạo xây dựng kiến trúc mobile mở rộng với React Native + TypeScript — tích hợp cổng thanh toán, xác thực sinh trắc học, bản đồ và push notification. Luôn chủ động nghiên cứu công nghệ mới, có khả năng làm việc độc lập hoàn toàn từ khởi tạo kiến trúc đến ship sản phẩm.",
  proSkills: [
    "React Native", "TypeScript", "JavaScript (ES6+)",
    "Redux Toolkit", "React Query", "React Navigation",
    "Node.js", "NestJS", "REST API", "JWT",
    "MySQL", "SQL Server",
  ],
  softSkills: [
    "Tự học & Nghiên cứu", "Làm việc độc lập", "Giải quyết vấn đề",
    "Làm việc nhóm", "Chịu áp lực", "Quản lý thời gian",
  ],
  experiences: [
    {
      duration: "02/2023 – Hiện tại",
      company: "Công ty CP Tài Nguyên Tri Thức Việt Năng",
      role: "React Native Developer",
      badge: null,
      description: "Phát triển và duy trì ứng dụng VnResource HRM – cổng nhân sự di động phục vụ hàng nghìn nhân viên doanh nghiệp. Ngoài ứng dụng chính, còn xây dựng và deploy riêng các phiên bản white-label cho từng khách hàng yêu cầu app thương hiệu cá nhân.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "SignalR", "Vision Camera", "NFC", "Google Maps API", "Biometrics", "Lottie"],
      features: [
        "Chấm công đa hình thức: nhận diện khuôn mặt (Vision Camera), QR code, NFC và GPS",
        "Xác thực sinh trắc học (Face ID / Fingerprint) cho đăng nhập bảo mật",
        "Hệ thống phê duyệt đa cấp: nghỉ phép, tăng ca, công tác, đổi ca",
        "Quản lý công việc & giao việc với theo dõi tiến độ real-time qua SignalR",
        "Nhắn tin nội bộ và push notification qua Firebase Messaging",
        "Xem & tải tài liệu, upload file lên Firebase Storage",
        "Theo dõi vị trí địa lý khi chấm công ngoài văn phòng",
        "Đánh giá hiệu suất nhân viên và báo cáo KPI",
        "Build & deploy riêng theo yêu cầu white-label cho từng khách hàng doanh nghiệp",
      ],
    },
    {
      duration: "01/2026 – 03/2026",
      company: "NRJ Parking – Ứng dụng bãi đỗ xe thông minh",
      role: "React Native Developer",
      badge: "Freelance",
      description: "Ứng dụng giúp người dùng tìm kiếm, đặt chỗ và thanh toán bãi đỗ xe theo thời gian thực tại thị trường quốc tế.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "Google Maps API", "Notifee"],
      features: [
        "Tìm kiếm bãi đỗ xe và đặt chỗ theo thời gian thực",
        "Quản lý phiên gửi xe với countdown session tự động",
        "Tích hợp Google Maps cho tìm kiếm và điều hướng",
        "QR code scanning cho check-in tự động",
        "Hệ thống multi-payment: Viva Wallet & Apple Pay",
        "Ví điện tử với auto top-up và theo dõi số dư",
        "Push notification qua Firebase & Notifee",
        "Hỗ trợ đa ngôn ngữ (i18n)",
      ],
    },
    {
      duration: "2023 – 2024",
      company: "Sabeco OA – Ứng dụng nội bộ doanh nghiệp",
      role: "React Native Developer",
      badge: "Freelance",
      description: "Ứng dụng nội bộ dành cho nhân viên Sabeco với hệ thống check-in/check-out GPS và các chức năng quản lý vị trí.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Google Maps API", "GPS"],
      features: [
        "Xây dựng hệ thống đăng nhập và quản lý người dùng",
        "Phát triển tính năng check-in / check-out bằng GPS",
        "Tích hợp bản đồ cho các chức năng liên quan đến vị trí",
        "Tối ưu hiệu năng hiển thị danh sách dữ liệu lớn",
      ],
    },
    {
      duration: "2024",
      company: "CodePush Server – Hệ thống OTA Update tự host",
      role: "Fullstack Developer",
      badge: "Nội bộ VnResource HRM",
      description: "Hệ thống OTA update self-host xây dựng để phục vụ cho ứng dụng VnResource HRM, thay thế Microsoft CodePush.",
      technologies: ["NestJS", "Node.js", "TypeScript", "MySQL", "JWT", "Docker"],
      features: [
        "Dashboard quản lý deployment đa môi trường (Dev / Staging / Production)",
        "QR code deployment cho testing nhanh",
        "JWT authentication & phân quyền người dùng",
        "Rollback & rollout theo version",
        "Theo dõi và quản lý version deployment theo thời gian thực",
      ],
    },
  ],
  education: {
    duration: "2019 – 2023",
    school: "Đại học Công nghiệp TP. HCM",
    major: "Kỹ thuật Phần mềm",
    note: "Tiếng Anh: đọc và viết",
  },
  additional: [
    "Đã triển khai nhiều ứng dụng lên App Store và Google Play",
    "Luôn chủ động học hỏi & cập nhật công nghệ mới vào sản phẩm",
    "Có tinh thần trách nhiệm cao, không ngại đương đầu với thử thách",
    "Có khả năng xây dựng và deploy project độc lập từ đầu đến hoàn thiện",
  ],
  labels: {
    contact: "THÔNG TIN",
    profile: "MỤC TIÊU NGHỀ NGHIỆP",
    proSkill: "KỸ NĂNG CHUYÊN MÔN",
    softSkill: "KỸ NĂNG MỀM",
    otherSkill: "CÔNG CỤ & KHÁC",
    experience: "KINH NGHIỆM LÀM VIỆC",
    education: "HỌC VẤN",
    additional: "THÔNG TIN THÊM",
    tech: "Công nghệ:",
    features: "Tính năng:",
    desc: "Mô tả:",
  },
};

const en: typeof vi = {
  firstName: "NGUYEN THANH",
  lastName: "NHAN",
  title: "React Native Developer",
  contact: {
    dob: "May 1, 2001",
    phone: "+84 373 523 365",
    email: "nguyenthanhnhan01052001@gmail.com",
    location: "Ho Chi Minh City, Vietnam",
    github: "github.com/nhan01052001",
  },
  profile:
    "React Native Developer with 3+ years of hands-on experience building production mobile applications for iOS & Android. Proficient in architecting scalable React Native + TypeScript solutions — integrating payment gateways, biometric authentication, maps, and push notifications. A self-driven learner who works independently from architecture setup to shipping polished products.",
  proSkills: [
    "React Native", "TypeScript", "JavaScript (ES6+)",
    "Redux Toolkit", "React Query", "React Navigation",
    "Node.js", "NestJS", "REST API", "JWT",
    "MySQL", "SQL Server",
  ],
  softSkills: [
    "Self-learning", "Independence", "Problem Solving",
    "Teamwork", "Working under pressure", "Time Management",
  ],
  experiences: [
    {
      duration: "Feb 2023 – Present",
      company: "Tai Nguyen Tri Thuc Viet Nang JSC",
      role: "React Native Developer",
      badge: null,
      description: "Developed and maintained VnResource HRM – an enterprise HR mobile portal serving thousands of employees. In addition to the main app, also built and deployed separate white-label versions for enterprise clients who requested their own branded application.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "SignalR", "Vision Camera", "NFC", "Google Maps API", "Biometrics", "Lottie"],
      features: [
        "Multi-modal attendance: face recognition (Vision Camera), QR code, NFC, and GPS check-in",
        "Biometric authentication (Face ID / Fingerprint) for secure login",
        "Multi-level approval workflows: leave, overtime, business trips, shift swaps",
        "Task management & assignment with real-time progress tracking via SignalR",
        "Internal messaging and push notifications via Firebase Messaging",
        "Document viewer & uploader with Firebase Storage integration",
        "Geolocation tracking for off-site attendance",
        "Employee performance evaluation and KPI reporting",
        "Built & deployed separate white-label app versions per client request",
      ],
    },
    {
      duration: "Jan 2026 – Mar 2026",
      company: "NRJ Parking – Smart Parking App",
      role: "React Native Developer",
      badge: "Freelance",
      description: "An app helping users find, book, and pay for parking spots in real-time, targeting international markets.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "React Query", "Firebase", "Google Maps API", "Notifee"],
      features: [
        "Real-time parking search and spot booking",
        "Session management with automatic countdown",
        "Google Maps integration for search and navigation",
        "QR code scanning for automatic check-in",
        "Multi-payment system: Viva Wallet & Apple Pay",
        "Digital wallet with auto top-up and balance tracking",
        "Push notifications via Firebase & Notifee",
        "Multi-language support (i18n)",
      ],
    },
    {
      duration: "2023 – 2024",
      company: "Sabeco OA – Internal Enterprise App",
      role: "React Native Developer",
      badge: "Freelance",
      description: "Internal application for Sabeco employees featuring GPS-based check-in/out, user management, and location-based functionalities.",
      technologies: ["React Native", "TypeScript", "Redux Toolkit", "Google Maps API", "GPS"],
      features: [
        "Login system and user management",
        "GPS-based check-in / check-out feature",
        "Map integration for location-based features",
        "Performance optimization for large data list rendering",
      ],
    },
    {
      duration: "2024",
      company: "CodePush Server – Self-hosted OTA Update System",
      role: "Fullstack Developer",
      badge: "Internal – VnResource HRM",
      description: "A self-hosted OTA update system built specifically to serve the VnResource HRM application, replacing Microsoft CodePush.",
      technologies: ["NestJS", "Node.js", "TypeScript", "MySQL", "JWT", "Docker"],
      features: [
        "Multi-environment deployment dashboard (Dev / Staging / Production)",
        "QR code deployment for quick testing",
        "JWT authentication & user role management",
        "Version rollback & rollout",
        "Real-time version deployment tracking",
      ],
    },
  ],
  education: {
    duration: "2019 – 2023",
    school: "Ho Chi Minh City University of Industry",
    major: "Software Engineering",
    note: "English: reading & writing",
  },
  additional: [
    "Shipped multiple applications on App Store and Google Play",
    "Proactively learns and applies new technologies to products",
    "Strong sense of responsibility; thrives under pressure",
    "Capable of building and deploying projects independently from scratch",
  ],
  labels: {
    contact: "CONTACT ME",
    profile: "PROFILE",
    proSkill: "PROFESSIONAL SKILL",
    softSkill: "PERSONAL SKILL",
    otherSkill: "TOOLS & OTHER",
    experience: "WORK EXPERIENCE",
    education: "EDUCATION",
    additional: "ADDITIONAL INFO",
    tech: "Technologies:",
    features: "Key Features:",
    desc: "Description:",
  },
};

/* ─── MAIN COMPONENT ────────────────────────────────────── */
export default function SeniorCVClient() {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") === "vi" ? "vi" : "en";
  const autoprint = searchParams.get("autoprint");
  const d = lang === "vi" ? vi : en;

  useEffect(() => {
    if (autoprint === "true") {
      const t = setTimeout(() => window.print(), 900);
      return () => clearTimeout(t);
    }
  }, [autoprint]);

  const otherSkills =
    lang === "vi"
      ? ["Firebase (FCM)", "Google Maps API", "Git", "Docker", "Native Android (Java)", "CodePush (OTA)", "App Store Connect", "Google Play Console", "Figma"]
      : ["Firebase (FCM)", "Google Maps API", "Git", "Docker", "Native Android (Java)", "CodePush (OTA)", "App Store Connect", "Google Play Console", "Figma"];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @page { size: A4; margin: 0; }
        * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Inter', 'Segoe UI', Arial, sans-serif; background: #bbb; }
        @media print {
          body { background: white; }
          .no-print { display: none !important; }
          .cv-wrap { box-shadow: none !important; }
        }
      `}</style>

      {/* Controls */}
      <div className="no-print" style={{ position: "fixed", top: "16px", left: "16px", zIndex: 50, display: "flex", gap: "8px" }}>
        <button onClick={() => window.close()} style={{ padding: "7px 16px", background: "#fff", border: "1px solid #ddd", borderRadius: "8px", fontSize: "13px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
          ← Đóng
        </button>
        <button onClick={() => window.print()} style={{ padding: "7px 16px", background: PEACH, color: "#fff", border: "none", borderRadius: "8px", fontSize: "13px", cursor: "pointer", fontFamily: "Inter, sans-serif" }}>
          🖨 In / Save PDF
        </button>
      </div>

      {/* Page background */}
      <div style={{ minHeight: "100vh", background: "#bbb", display: "flex", justifyContent: "center", paddingTop: "60px", paddingBottom: "40px" }}>
        <div className="cv-wrap" style={{
          width: "210mm",
          background: "#fff",
          boxShadow: "0 8px 48px rgba(0,0,0,0.22)",
          fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
          fontSize: "8.5pt",
          color: DARK,
          position: "relative",
        }}>

          {/* ── HEADER ── */}
          <div style={{ background: PEACH, padding: "26px 32px 20px 32px", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", top: "-24px", right: "-24px",
              width: "110px", height: "110px", borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
            }} />
            <div style={{
              position: "absolute", top: "16px", right: "22px",
              width: "56px", height: "56px", borderRadius: "50%",
              background: "rgba(255,255,255,0.10)",
            }} />
            <div style={{
              fontWeight: 800, fontSize: "26pt", color: "#fff",
              letterSpacing: "5px", fontStyle: "italic",
              lineHeight: 1.2, userSelect: "none", whiteSpace: "nowrap",
            }}>
              {d.firstName}&nbsp;&nbsp;{d.lastName}
            </div>
          </div>

          {/* ── BODY (sidebar + content) ── */}
          <div style={{ display: "flex" }}>

            {/* LEFT SIDEBAR */}
            <div style={{ width: "68mm", background: PEACH_LIGHT, flexShrink: 0, paddingBottom: "32px" }}>

              {/* Avatar block */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "22px 16px 14px" }}>
                <div style={{
                  width: "96px", height: "96px", borderRadius: "50%",
                  border: `3.5px solid ${PEACH}`,
                  overflow: "hidden",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                  flexShrink: 0,
                }}>
                  <Image src="/avatar.jpg" alt={d.firstName} width={96} height={96}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                </div>
                <div style={{
                  fontWeight: 700, fontSize: "9pt", color: DARK,
                  textAlign: "center", marginTop: "10px", letterSpacing: "0.2px", lineHeight: 1.4,
                }}>
                  {d.firstName} {d.lastName}
                </div>
                <div style={{ fontSize: "7.5pt", color: LIGHT_GRAY, marginTop: "3px", textAlign: "center" }}>
                  {d.title}
                </div>
              </div>

              <div style={{ height: "1px", background: "rgba(0,0,0,0.09)", margin: "0 18px 16px" }} />

              {/* Contact */}
              <SideSection title={d.labels.contact}>
                <ContactRow icon="🎂" text={d.contact.dob} />
                <ContactRow icon="📞" text={d.contact.phone} />
                <ContactRow icon="✉️" text={d.contact.email} small />
                <ContactRow icon="📍" text={d.contact.location} />
                <ContactRow icon="🔗" text={d.contact.github} small />
              </SideSection>

              {/* Professional Skills – simple list */}
              <SideSection title={d.labels.proSkill}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {d.proSkills.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px", lineHeight: 1.5 }}>
                      <span style={{ color: PEACH, fontSize: "8pt", flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: "8pt", color: GRAY }}>{s}</span>
                    </div>
                  ))}
                </div>
              </SideSection>

              {/* Personal Skills – simple list */}
              <SideSection title={d.labels.softSkill}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {d.softSkills.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px", lineHeight: 1.5 }}>
                      <span style={{ color: PEACH, fontSize: "8pt", flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: "8pt", color: GRAY, textTransform: "uppercase", letterSpacing: "0.3px" }}>{s}</span>
                    </div>
                  ))}
                </div>
              </SideSection>

              {/* Tools & Other */}
              <SideSection title={d.labels.otherSkill}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {otherSkills.map((s) => (
                    <div key={s} style={{ display: "flex", alignItems: "center", gap: "6px", lineHeight: 1.5 }}>
                      <span style={{ color: PEACH, fontSize: "8pt", flexShrink: 0 }}>▸</span>
                      <span style={{ fontSize: "8pt", color: GRAY }}>{s}</span>
                    </div>
                  ))}
                </div>
              </SideSection>
            </div>

            {/* RIGHT CONTENT */}
            <div style={{ flex: 1, padding: "20px 24px 32px", position: "relative", overflow: "hidden" }}>

              {/* Profile */}
              <RightSection title={d.labels.profile}>
                <p style={{ color: GRAY, lineHeight: 1.7, fontSize: "8.5pt" }}>{d.profile}</p>
              </RightSection>

              {/* Work Experience */}
              <RightSection title={d.labels.experience}>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {d.experiences.map((exp, i) => (
                    <div key={i} style={{ paddingBottom: i < d.experiences.length - 1 ? "14px" : 0, borderBottom: i < d.experiences.length - 1 ? "1px dashed #e8e8e8" : "none" }}>
                      {/* Header row */}
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "8px", marginBottom: "2px" }}>
                        <span style={{ fontWeight: 700, fontSize: "9pt", color: DARK, lineHeight: 1.4 }}>
                          {exp.company}
                        </span>
                        <span style={{ fontSize: "7.5pt", color: LIGHT_GRAY, whiteSpace: "nowrap", flexShrink: 0, marginTop: "2px" }}>
                          {exp.duration}
                        </span>
                      </div>

                      {/* Role + Badge */}
                      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "5px" }}>
                        <span style={{ fontSize: "8pt", color: PEACH, fontWeight: 600, fontStyle: "italic" }}>{exp.role}</span>
                        {exp.badge && (
                          <span style={{
                            fontSize: "6.5pt", fontWeight: 700, letterSpacing: "0.5px",
                            background: exp.badge.toLowerCase().includes("freelance") ? "#fff3e8" : "#e8f4ff",
                            color: exp.badge.toLowerCase().includes("freelance") ? "#c07030" : "#3070c0",
                            border: `1px solid ${exp.badge.toLowerCase().includes("freelance") ? "#f0c090" : "#90c0f0"}`,
                            padding: "1px 6px", borderRadius: "4px",
                          }}>
                            {exp.badge}
                          </span>
                        )}
                      </div>

                      {/* Description */}
                      <p style={{ fontSize: "8pt", color: GRAY, lineHeight: 1.6, marginBottom: "6px" }}>
                        <span style={{ fontWeight: 600 }}>{d.labels.desc}</span> {exp.description}
                      </p>

                      {/* Technologies */}
                      <div style={{ marginBottom: "5px" }}>
                        <span style={{ fontSize: "7.5pt", fontWeight: 700, color: DARK }}>{d.labels.tech} </span>
                        <span style={{ fontSize: "7.5pt", color: GRAY }}>{exp.technologies.join(" • ")}</span>
                      </div>

                      {/* Features */}
                      <div>
                        <div style={{ fontSize: "7.5pt", fontWeight: 700, color: DARK, marginBottom: "3px" }}>{d.labels.features}</div>
                        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                          {exp.features.map((f, j) => (
                            <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
                              <span style={{ color: PEACH, flexShrink: 0, fontSize: "8pt", marginTop: "0px" }}>▹</span>
                              <span style={{ fontSize: "7.5pt", color: GRAY, lineHeight: 1.55 }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </RightSection>

              {/* Education */}
              <RightSection title={d.labels.education}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "9pt", color: DARK, lineHeight: 1.4 }}>{d.education.school}</div>
                    <div style={{ fontSize: "8pt", color: GRAY, fontStyle: "italic", marginTop: "2px" }}>{d.education.major}</div>
                    <div style={{ fontSize: "7.5pt", color: LIGHT_GRAY, marginTop: "2px" }}>{d.education.note}</div>
                  </div>
                  <span style={{ fontSize: "7.5pt", color: LIGHT_GRAY, whiteSpace: "nowrap", marginLeft: "8px", marginTop: "2px" }}>
                    {d.education.duration}
                  </span>
                </div>
              </RightSection>

              {/* Additional */}
              <RightSection title={d.labels.additional}>
                <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  {d.additional.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "5px" }}>
                      <span style={{ color: PEACH, flexShrink: 0, fontSize: "8pt" }}>▹</span>
                      <span style={{ fontSize: "8pt", color: GRAY, lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </RightSection>

              {/* Decorative blobs bottom-right */}
              <div style={{
                position: "absolute", bottom: "-36px", right: "-36px",
                width: "110px", height: "110px", borderRadius: "50%",
                background: PEACH_LIGHT, zIndex: 0, pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: "30px", right: "26px",
                width: "52px", height: "52px", borderRadius: "50%",
                background: PEACH, opacity: 0.35, zIndex: 0, pointerEvents: "none",
              }} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ─── SUB-COMPONENTS ────────────────────────────────────── */
function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ padding: "0 18px", marginBottom: "16px" }}>
      <div style={{
        fontWeight: 700, fontStyle: "italic", fontSize: "8.5pt",
        color: DARK, letterSpacing: "0.6px",
        marginBottom: "8px", lineHeight: 1,
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function ContactRow({ icon, text, small }: { icon: string; text: string; small?: boolean }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "6px", marginBottom: "5px" }}>
      <span style={{ fontSize: "9pt", flexShrink: 0, lineHeight: 1.3 }}>{icon}</span>
      <span style={{ fontSize: small ? "7pt" : "7.8pt", color: GRAY, lineHeight: 1.45, wordBreak: "break-all" }}>{text}</span>
    </div>
  );
}

function RightSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "16px", position: "relative", zIndex: 1 }}>
      <div style={{
        fontWeight: 800, fontStyle: "italic", fontSize: "10pt",
        color: DARK, letterSpacing: "0.8px", lineHeight: 1,
        marginBottom: "6px",
      }}>
        {title}
      </div>
      <div style={{ width: "100%", height: "1.5px", background: "#e5e5e5", marginBottom: "10px" }} />
      {children}
    </div>
  );
}
