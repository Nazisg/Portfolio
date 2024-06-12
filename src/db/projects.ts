import { Project } from "@/shared/types";
import movie from "@/shared/media/imgs/movie.png";
import plast from "@/shared/media/imgs/plast.png";
import furniro from "@/shared/media/imgs/furniro.png";
import crm from "@/shared/media/imgs/crm.png";
import coffee from "@/shared/media/imgs/coffee.png";
import dietitian from "@/shared/media/imgs/dietitian.png";

const projects: Project[] = [
    {
      title: "StreamVibe",
      subtitle: "Movie page",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: movie,
      technologies: ["React", "TypeScript","Tailwind CSS","SCSS", "TMDb API", "RTK Query"],
      githubLink: "https://github.com/Nazisg/movie-page-tmdb-api",
      liveLink: "https://movie-page-tmdb-api.vercel.app/",
    },
    {
      title: "CRM",
      subtitle: "Admin Panel",
      description: "An admin panel for managing employees relations, built with a modern UI and various administrative features.",
      image: crm,
      technologies: ["React", "TypeScript","Ant Design", "SCSS", "Redux Toolkit","REST API"],
      githubLink: "https://github.com/Nazisg/admin-panel-ts-api",
      liveLink: "https://admin-panel-ts-seven.vercel.app/",
    },
    {
      title: "Furniro",
      subtitle: "e-Commerce",
      description: "An e-commerce platform for furniture, allowing users to browse products, view details, and make purchases.",
      image: furniro,
      technologies: ["React", "JavaScript","Tailwind CSS", "SCSS", "Redux Toolkit","REST API"],
      githubLink: "https://github.com/Nazisg/furniro-ecommerce",
      liveLink: "https://crocusoft-furniro.vercel.app/",
    },
    {
      title: "Plast",
      subtitle: "Blog",
      description: "A blog platform for sharing articles, featuring a sleek design and multi-language support.",
      image: plast,
      technologies: ["React", "JavaScript","SCSS", "Context API", "i18next","Framer Motion"],
      githubLink: "https://github.com/Nazisg/plast-blog",
      liveLink: "https://plast-six.vercel.app/",
    },
    {
      title: "Coffee Shop",
      subtitle: "e-Commerce",
      description: "An e-commerce site for a coffee shop, offering an online shopping experience for various coffee products.",
      image: coffee,
      technologies: ["React", "JavaScript", "CSS", "Redux","JSON Server", "react-slick"],
      githubLink: "https://github.com/Nazisg/coffee-shop",
      liveLink: "https://coffee-shop-nazisgs-projects.vercel.app/",
    },
    {
      title: "Amy Dietitian",
      subtitle: "dietitian personal blog",
      description: "A personal blog for a dietitian named Amy, featuring articles on nutrition, healthy eating, and lifestyle tips.",
      image: dietitian,
      technologies: ["HTML", "CSS","JavaScript", "Bootstrap", "Responsive Design"],
      githubLink: "https://github.com/Nazisg/dietitian-single-page-bootstrap",
      liveLink: "https://dietitian-single-page-bootstrap-nazisgs-projects.vercel.app/",
    },
  ];

export default projects;
