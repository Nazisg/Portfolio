import { Project } from "@/shared/types";
import movie from "@/shared/media/imgs/movie.png";

const projects: Project[] = [
    {
      title: "StreamVibe",
      subtitle: "Movie page",
      description: "A movie page that allows users to browse and search for movies using the TMDb API.",
      image: movie,
      technologies: ["React", "TypeScript", "TMDb API", "RTK Query"],
      githubLink: "https://github.com/Nazisg/movie-page-tmdb-api",
      liveLink: "https://movie-page-tmdb-api.vercel.app/",
    },
  ];

  export default projects