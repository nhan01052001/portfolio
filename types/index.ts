export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
  current: boolean;
}

export interface Project {
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

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description?: string;
}
