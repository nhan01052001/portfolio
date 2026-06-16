"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Calendar } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getExperiences } from "@/data/experience";

export default function Experience() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const experiences = getExperiences(lang);

  return (
    <section id="experience" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2">{t("experience.section")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("experience.heading")}
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                className="relative pl-16 md:pl-20"
              >
                <div
                  className={`absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 ${
                    exp.current ? "bg-emerald-500" : "bg-gray-400 dark:bg-gray-600"
                  }`}
                />

                <div className="bg-white dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 p-6 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">{exp.position}</h3>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1.5 mt-1">
                        <MapPin size={14} />
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 shrink-0">
                      <Calendar size={14} />
                      {exp.duration}
                      {exp.current && (
                        <span className="ml-2 px-2 py-0.5 text-xs bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 rounded-full">
                          {t("experience.current")}
                        </span>
                      )}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.responsibilities.map((r, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-emerald-500 mt-1 shrink-0">▹</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
