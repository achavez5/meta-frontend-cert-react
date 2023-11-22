import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  let borderRadius = "10px";

  return (
    <div style={ { borderRadius: borderRadius, backgroundColor:"white"}  }>
      <Image src={imageSrc} alt={description} style={{borderRadius: borderRadius}}/>
      <VStack space="8px" style={{ padding: "2em", paddingBottom: "0px"}} alignItems="left">
        <Heading size="md" style={{ color: "black"}}>{title}</Heading>
        <Text textColor="darkgrey">{description}</Text>
      </VStack>
      <HStack space="8px" align-items="left" style={{ padding: "2em" }} color="darkslategrey">
          <Text><a href="/">See more</a></Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </HStack>
    </div>
  );
};

export default Card;
