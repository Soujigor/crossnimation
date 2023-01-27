import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Pauzinho = ({ zindex, bg, rotate, top, left, animate }) => {
  return (
    <Flex
      position="absolute"
      top={top}
      left={left}
      as={motion.div}
      animate={animate}
      onClick={() => console.log("oi")}
      w="60px"
      h="20px"
      borderRadius="20px"
      bg={bg}
      zIndex={zindex}
    />
  );
};

export default Pauzinho;
