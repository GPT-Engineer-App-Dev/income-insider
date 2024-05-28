import { Container, Text, VStack, Box, Heading, Image, SimpleGrid } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={4} align="stretch">
        <Box>
          <Heading as="h1" size="xl">Latest News</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={4} mt={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news1.jpg" alt="News 1" />
              <Box p={4}>
                <Heading as="h2" size="md">News Headline 1</Heading>
                <Text mt={2}>Brief description of the news article.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news2.jpg" alt="News 2" />
              <Box p={4}>
                <Heading as="h2" size="md">News Headline 2</Heading>
                <Text mt={2}>Brief description of the news article.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/news3.jpg" alt="News 3" />
              <Box p={4}>
                <Heading as="h2" size="md">News Headline 3</Heading>
                <Text mt={2}>Brief description of the news article.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
        <Box>
          <Heading as="h2" size="lg">Trending Articles</Heading>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={4} mt={4}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/trending1.jpg" alt="Trending 1" />
              <Box p={4}>
                <Heading as="h3" size="md">Trending Headline 1</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src="/images/trending2.jpg" alt="Trending 2" />
              <Box p={4}>
                <Heading as="h3" size="md">Trending Headline 2</Heading>
                <Text mt={2}>Brief description of the trending article.</Text>
              </Box>
            </Box>
          </SimpleGrid>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;