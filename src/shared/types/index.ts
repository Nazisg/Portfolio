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