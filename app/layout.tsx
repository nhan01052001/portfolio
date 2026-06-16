import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nguyễn Thành Nhân | React Native Developer",
  description:
    "React Native Developer với 3+ năm kinh nghiệm phát triển ứng dụng mobile production cho iOS & Android. TypeScript, Redux Toolkit, Firebase, NestJS.",
  keywords: ["React Native", "Mobile Developer", "iOS", "Android", "TypeScript", "Redux Toolkit", "NestJS", "Ho Chi Minh"],
  authors: [{ name: "Nguyễn Thành Nhân" }],
  openGraph: {
    title: "Nguyễn Thành Nhân | React Native Developer",
    description: "3+ năm xây dựng ứng dụng mobile production. Đã deploy lên App Store & Google Play.",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nguyễn Thành Nhân | React Native Developer",
    description: "3+ năm xây dựng ứng dụng mobile production. Đã deploy lên App Store & Google Play.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
