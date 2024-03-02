import React from "react";

import { Avatar,  Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pallavi B!";
const bio1 = "A frontend developer specialised in React";
const bio2 = " Welcome! My name is Pallavi, and I'm a self-driven web developer with a year of hands-on experience in both front-end and back-end development. Currently, working on Meta Front-end Professional Certification. ";
const bio3= "I'm proficient in Python, PHP, JavaScript, HTML, CSS, CMS, and various web development frameworks. My passion lies in creating beautiful and functional websites that cater to the needs of businesses and individuals alike.";
const bio4="Currently, I am seeking an internship or job opportunity where I can apply my expertise and contribute effectively to a team. I am thrilled to share my portfolio with you and demonstrate the value I can bring to your projects.";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  
  <VStack spacing={4} alignItems="center">
      <Avatar 
     /* src={'https://i.pravatar.cc/150?img=16'} */
      name="Pallavi B" size="2xl" background={"gray"}>              
      </Avatar>
      <Heading as="h1" size="xl" color="white">
        {greeting}
      </Heading>
      <br />
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio1}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio2}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio3}
      </Heading>
      <Heading as="h2" size="md" color="white" textAlign="center">
        {bio4}
      </Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
