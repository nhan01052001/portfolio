"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { GitFork, ExternalLink, Smartphone, Clock, User } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects } from "@/data/projects";

export default function Projects() {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState<string | null>(null);
  const projects = getProjects(lang);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50/50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-2">{t("projects.section")}</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            {t("projects.heading")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className={`bg-white dark:bg-gray-800/50 rounded-2xl border transition-all cursor-pointer overflow-hidden ${
                active === project.id
                  ? "border-emerald-400 dark:border-emerald-600 shadow-lg shadow-emerald-500/10"
                  : "border-gray-100 dark:border-gray-700/50 hover:border-emerald-200 dark:hover:border-emerald-800"
              }`}
              onClick={() => setActive(active === project.id ? null : project.id)}
            >
              <div className="h-2 bg-gradient-to-r from-emerald-400 to-teal-500" />

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight pr-4">
                    {project.name}
                  </h3>
                  <Smartphone size={20} className="text-emerald-500 shrink-0 mt-1" />
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {project.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {project.duration}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400 rounded font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {active === project.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 dark:border-gray-700 pt-4 mt-2"
                  >
                    <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2 uppercase tracking-wide">
                      {t("projects.features_label")}
                    </p>
                    <ul className="space-y-1.5">
                      {project.features.map((f, j) => (
                        <li key={j} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                          <span className="text-emerald-500 shrink-0 mt-0.5">▹</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}

                {(project.github || project.demo || project.playStore) && (
                  <div className="flex items-center gap-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="GitHub"
                      >
                        <GitFork size={18} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 dark:text-gray-400 hover:text-emerald-600 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.playStore && (
                      <a
                        href={project.playStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-emerald-600 dark:text-emerald-400 hover:underline"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {t("projects.play_store")}
                      </a>
                    )}
                  </div>
                )}

                <p className="text-xs text-gray-400 dark:text-gray-600 mt-3">
                  {active === project.id ? t("projects.collapse") : t("projects.expand")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
