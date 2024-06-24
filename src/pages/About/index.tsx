import Title from "@/shared/components/Title";

function About() {
  return (
    <section>
      <Title title={"About"} />
      
      <div className="text-[15px] leading-loose text-[#d6d6d6] flex flex-col gap-3">
        <p>
          As a highly motivated Frontend Developer with a solid foundation in
          HTML, CSS, JavaScript, and React, I am passionate about creating
          user-friendly interfaces and writing clean, efficient code. My
          attention to detail and commitment to best practices ensure that I
          deliver high-quality work that meets and exceeds user expectations.
        </p>
        <p>
          In my quest to become a well-rounded developer, I am currently
          enrolled in a MERN stack course after winning the Technest
          Scholarship. This opportunity allows me to improve both client-side
          and server-side development skills, thereby enhancing my overall
          backend expertise. I am eager to learn from experienced developers and
          continuously improve my skill set, striving to stay at the forefront
          of industry trends and technologies, and contribute meaningfully to
          project success.
        </p>
      </div>
    </section>
  );
}

export default About;
