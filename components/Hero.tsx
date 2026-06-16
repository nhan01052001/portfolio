"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { GitFork, Link, Mail, Download, ArrowDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6 } }),
};

export default function Hero() {
  const { t, lang } = useLanguage();

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    if (lang === "vi") {
      const a = document.createElement("a");
      a.href = "/cv-vi.pdf";
      a.download = "Nguyen-Thanh-Nhan-CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      window.open(`/cv/senior?lang=en&autoprint=true`, "_blank");
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center relative px-6 pt-20"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-400/10 dark:bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar */}
        <motion.div
          custom={0}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mb-8 flex justify-center"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg ring-4 ring-emerald-400/30">
            <Image
              src="/avatar.jpg"
              alt="Nguyễn Thành Nhân"
              width={128}
              height={128}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.p
          custom={1}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-4"
        >
          {t("hero.greeting")}
        </motion.p>

        <motion.h1
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Nguyễn Thành Nhân
        </motion.h1>

        <motion.h2
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-2xl md:text-4xl font-semibold text-gray-500 dark:text-gray-400 mb-6"
        >
          {t("hero.title")}
        </motion.h2>

        <motion.p
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {t("hero.tagline")}<br />
          {t("hero.tagline2")}
        </motion.p>

        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <button
            onClick={scrollToProjects}
            className="px-6 py-3 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-500/25"
          >
            {t("hero.cta_projects")}
          </button>
          <button
            onClick={handleDownloadCV}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-emerald-600 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <Download size={16} />
            {t("hero.cta_cv")}
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            {t("hero.cta_contact")}
          </a>
        </motion.div>

        <motion.div
          custom={6}
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center gap-6"
        >
          <a
            href="https://github.com/nhan01052001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GitFork size={22} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={22} />
          </a>
          <a
            href="mailto:nguyenthanhnhan01052001@gmail.com"
            className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 dark:text-gray-600"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}
