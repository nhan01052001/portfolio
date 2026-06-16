"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone, Globe, Zap, Users } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const domainMap = {
  vi: ["Smart Parking", "Enterprise", "Internal Tools", "OTA / DevOps"],
  en: ["Smart Parking", "Enterprise", "Internal Tools", "OTA / DevOps"],
};

export default function About() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: t("about.stat_years"), value: "3+", icon: Zap },
    { label: t("about.stat_apps"), value: "3+", icon: Smartphone },
    { label: t("about.stat_projects"), value: "5+", icon: Globe },
    { label: t("about.stat_platforms"), value: "iOS+Android", icon: Users },
  ];

  const domains = domainMap[lang];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2">{t("about.section")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("about.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            <p>
              {t("about.p1")}{" "}
              <span className="text-gray-900 dark:text-white font-medium">{t("about.p1_highlight")}</span>{" "}
              {t("about.p1_rest")}
            </p>
            <p>{t("about.p2")}</p>
            <p>
              {t("about.p3")}{" "}
              <span className="text-gray-900 dark:text-white font-medium">{t("about.p3_highlight")}</span>{" "}
              {t("about.p3_rest")}
            </p>
            <p>{t("about.p4")}</p>

            <div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                {t("about.domains_label")}
              </p>
              <div className="flex flex-wrap gap-2">
                {domains.map((d) => (
                  <span
                    key={d}
                    className="text-sm px-3 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 rounded-full"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-5"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors group"
              >
                <stat.icon size={24} className="text-emerald-500 mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
