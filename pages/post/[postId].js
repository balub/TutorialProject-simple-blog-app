import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import {
  Heading,
  Grid,
  VStack,
  GridItem,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";

function PostPage() {
  const router = useRouter();
  const { data, isLoading, isError } = useQuery("fetchOneBlog", async () => {
    const { data } = await axios.get(
      `http://localhost:3004/blog/${router.query.postId}`
    );
    return data;
  });

  if (isLoading) {
    return <Heading>Loading....</Heading>;
  }
  if (isError) {
    return <Heading>Error....</Heading>;
  }
  return (
    <VStack w="100vw" align="start" overflow="hidden">
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={10}
      >
        <GridItem rowSpan={1} colSpan={1}>
          <Box ml="5">
            <Text fontSize="5xl" fontWeight="normal" as="i">
              {data.title}
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={1} colSpan={4}>
          <Image
            src={data.thumbnail}
            alt="Segun Adebayo"
            fit="cover"
            borderRadius="5px"
            w="75vw"
            h="70vh"
          />
        </GridItem>
      </Grid>
      <Box p="6">
        <Text>{data.body}</Text>
      </Box>
    </VStack>
  );
}

export default PostPage;
