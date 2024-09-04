"use client";
import { useAsPath } from "@/store/router";
import { Container, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MainContent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  const pathname = usePathname();
  const { prevAsPath } = useAsPath();

  return (
    <Container maxW="7xl" my="120px">
      {pathname !== "/" && (
        <Link href={prevAsPath || "/"}>
          <Flex gap={2} alignItems="center" mb="60px">
            <Image
              src="/leftArrow.svg"
              width={20}
              height={20}
              alt="back arrow"
            />
            <Text fontSize={20}>Back</Text>
          </Flex>
        </Link>
      )}
      {children}
    </Container>
  );
};

export default MainContent;
