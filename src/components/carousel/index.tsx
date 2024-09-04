"use client";

import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text
} from "@chakra-ui/react";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import Image from "next/image";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  const [slider, setSlider] = React.useState<Slider | null>(null);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const cards = [
    {
      url: "https://placehold.co/1195x400/D1D3CA/D1D3CA",
      alt: "carousel first item",
      description:
        "Aliquam malesuada velit nisl, quis porta massa bibendum ut. Pellentesque interdum purus felis, sit amet ullamcorper dolor mattis gravida. In non ullamcorper ex. Proin rutrum placerat tortor in sodales.",
      type: "image",
    },
    {
      url: "https://placehold.co/1195x400/D1D3CA/D1D3CA",
      alt: "carousel second item",
      description:
        "Aliquam malesuada velit nisl, quis porta massa bibendum ut. Pellentesque interdum purus felis, sit amet ullamcorper dolor mattis gravida. In non ullamcorper ex. Proin rutrum placerat tortor in sodales.",
      type: "image",
    },
    {
      url: "https://placehold.co/1195x400/D1D3CA/D1D3CA",
      alt: "carousel third item",
      description:
        "Aliquam malesuada velit nisl, quis porta massa bibendum ut. Pellentesque interdum purus felis, sit amet ullamcorper dolor mattis gravida. In non ullamcorper ex. Proin rutrum placerat tortor in sodales.",
      type: "image",
    },
  ];

  return (
    <Box position={"relative"} width={"full"} overflow={"hidden"}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <Image src="/leftArrow.svg" height={40} width={40} alt="left arrow" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <Image src="/rightArrow.svg" height={40} width={40} alt="right arrow" />
      </IconButton>
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={"455px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.url})`}
          >
            <Text
              pos="absolute"
              top="60%"
              right={{ base: "0", md: "80px", xl: "120px" }}
              maxW="580px"
              fontSize={{ base: "md", lg: "lg" }}
              color="black.500"
            >
              {card.description}
            </Text>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
