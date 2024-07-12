export interface Skill {
  name: string;
  iconUrl: string;
}

export interface TitleProps {
  title: string;
}
export interface Project {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string;
}

export interface ContactForm {
  user_name: string;
  user_email: string;
  message: string;
}

export interface ExperienceItem {
  company: string;
  industry: string;
  period: string;
  position: string;
  tasks: string[];
}

export interface EducationItem {
  institution: string;
  period: string;
  program: string;
  description: string;
}
