import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: achavezv97@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/achavez5",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/alejandro-chavez-151bb8164/",
  }
];

const Header = () => {
  const handleClick = (e) => {
    const sectionName = e.target.text.toLowerCase().replace(" ","");
    const id = `${sectionName}-section`;
    const element = document.getElementById(id);
    
    e.preventDefault();

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex={200} // fixes the header navigation bar to the top of all elements
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
              {
                socials.map( (e) => <a href={e.url} key={e.url}><FontAwesomeIcon icon={e.icon} size="2x"/></a>)
              }
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#contact-me" onClick={ handleClick }>Projects</a>
              <a href="/#projects"   onClick={ handleClick }>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
