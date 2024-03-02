import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Portfolio Showcase",
    description:
      "Welcome to portfolio showcase! Explore projects showcasing my coding style and problem-solving approach. Proficient in Python, PHP, JavaScript, HTML, CSS, and web development frameworks like React. Seeking challenging opportunities to expand expertise. ",
    getImageSrc: () => require("../images/photo1.jpg"),
  },
  {
    title: "Rsponsive Design",
    description:
      "In my responsive page design project, I've crafted a layout that smoothly adjusts to various screen sizes and devices, ensuring top-notch user experience across different platforms. It showcases my expertise in responsive web design principles and commitment to user-centric solutions.",
    getImageSrc: () => require("../images/photo2.jpg"),
  },
  {
    title: "Matching Game",
    description:
      "Welcome to my JavaScript game! Click the extra smiling face on the left to start playing. This interactive game blends simple mechanics with surprise, offering an engaging experience. Once clicked, the game begins, promising excitement and fun. Get ready to test your skills and embark on a delightful gaming adventure!",
    getImageSrc: () => require("../images/photo3.jpg"),
  },
  {
    title: "Memory Game",
    description:
      "This project involved collaborative JavaScript development for an interactive game display. As the front-end developer, I designed the UI and implemented game logic. I considered client needs to deliver expected product functionality.",
    getImageSrc: () => require("../images/photo4.jpg"),
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
