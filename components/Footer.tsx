"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-500">
        <p>
          {t("footer.built_by")}{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-medium">Nguyễn Thành Nhân</span>
        </p>
        <p className="font-mono text-xs">
          Next.js · Tailwind · Framer Motion
        </p>
      </div>
    </footer>
  );
}
