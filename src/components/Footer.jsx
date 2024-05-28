import { Box, Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} color={useColorModeValue("gray.700", "gray.200")}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"} px={4}>
        <Text>© 2023 Financial Times</Text>
        <Flex>
          <Link href="/about" mx={2}>About Us</Link>
          <Link href="/contact" mx={2}>Contact</Link>
          <Link href="/privacy" mx={2}>Privacy Policy</Link>
          <Link href="/terms" mx={2}>Terms of Service</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;