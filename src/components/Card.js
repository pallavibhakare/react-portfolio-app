import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack
      backgroundColor="white"
      borderRadius="md"
      p={2}
      boxShadow="md"
      spacing={4}
      alignItems="flex-start"
    >
      <Image src={imageSrc} alt={title} borderRadius="md" />
      <VStack alignItems="flex-start" spacing={0}>
        <Heading as="h2" size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </VStack>
      <HStack alignSelf="flex-end" spacing={2}>
        <Text color="blue.500" fontWeight="bold" fontSize="sm">
          See More
        </Text>
        <FontAwesomeIcon icon={faArrowRight} color="blue" size="1x"/>
      </HStack>
    </VStack>
  );
};

export default Card;
