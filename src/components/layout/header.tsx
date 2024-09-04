'use client';

import { Box, Img } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as="nav" height="100px" bg="primary.500" display="flex" alignContent="center">
      <Img
        src="/valtech-logo.svg"
        width={{base: "120px" ,md: "140px" ,xl: "180px"}}
        height="100px"
        alt="Valtech-logo"
        sx={{ marginLeft: { base: '60px', md: "100px", xl: "120px"  } }}
      />
    </Box>
  );
};

export default Header;
