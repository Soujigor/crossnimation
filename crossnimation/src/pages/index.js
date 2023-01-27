import { Flex } from "@chakra-ui/react";
import Pauzinho from "@/components/Pauzinho";

const paus = [
  {
    zindex: 1,
    bg: "blue",
    top: "0",
    left: "0",
    animate: {
      scale: [1, 1],
      rotate: [0, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        // times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        // repeatDelay: 1
      },
      // x: ["10px", "30px"],
    },
  },
  {
    zindex: 0,
    bg: "red",
    top: "-20px",
    left: "20px",
    animate: {
      scale: [1, 1],
      rotate: [90, 90],
      transition: {
        duration: 2,
        ease: "easeInOut",
        // times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        // repeatDelay: 1
      },
    },
  },
  {
    zindex: -1,
    bg: "yellow",
    top: "20px",
    left: "20px",
    animate: {
      scale: [1, 1],
      rotate: [270, 270],
      transition: {
        duration: 2,
        ease: "easeInOut",
        // times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        // repeatDelay: 1
      },
    },
  },
  {
    zindex: -2,
    bg: "green",
    top: "0",
    left: "40px",
    animate: {
      scale: [1, 1],
      rotate: [360, 360],
      transition: {
        duration: 2,
        ease: "easeInOut",
        // times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        // repeatDelay: 1
      },
    },
  },
];

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" justify="center" align="center">
      <Flex position="relative">
        {paus.map((pau, index) => {
          return <Pauzinho {...pau} key={index} />;
        })}
      </Flex>
    </Flex>
  );
}
