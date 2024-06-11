import { Project } from "@/shared/types";
import movie from "@/shared/media/imgs/movie.png";
import plast from "@/shared/media/imgs/plast.png";
import furniro from "@/shared/media/imgs/furniro.png";
import crm from "@/shared/media/imgs/crm.png";
import coffee from "@/shared/media/imgs/coffee.png";

const projects: Project[] = [
    {
      title: "StreamVibe",
      subtitle: "Movie page",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: movie,
      technologies: ["React", "TypeScript","Tailwind CSS", "TMDb API", "RTK Query"],
      githubLink: "https://github.com/Nazisg/movie-page-tmdb-api",
      liveLink: "https://movie-page-tmdb-api.vercel.app/",
    },
    {
      title: "Plast",
      subtitle: "Blog",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: plast,
      technologies: ["React", "JavaScript","SCSS", "Context-api", "i18next","Framer Motion"],
      githubLink: "https://github.com/Nazisg/plast-blog",
      liveLink: "https://plast-six.vercel.app/",
    },
    {
      title: "Furniro",
      subtitle: "e-Commerce",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: furniro,
      technologies: ["React", "JavaScript","Tailwind CSS", "SCSS", "Redux Toolkit","REST API"],
      githubLink: "https://github.com/Nazisg/furniro-ecommerce",
      liveLink: "https://crocusoft-furniro.vercel.app/",
    },
    {
      title: "CRM",
      subtitle: "Admin Panel",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: crm,
      technologies: ["React", "TypeScript","Ant Design", "SCSS", "Redux Toolkit","REST API"],
      githubLink: "https://github.com/Nazisg/furniro-ecommerce",
      liveLink: "https://crocusoft-furniro.vercel.app/",
    },
    {
      title: "Coffee Shop",
      subtitle: "e-Commerce",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: coffee,
      technologies: ["React", "JavaScript", "CSS", "Redux","json"],
      githubLink: "https://github.com/Nazisg/coffee-shop",
      liveLink: "https://coffee-shop-nazisgs-projects.vercel.app/",
    },
  ];

  export default projects