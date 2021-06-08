import React from "react";
import { HStack, WrapItem, Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { useRouter } from "next/router";

function BlogCard(props) {
  const router = useRouter();
  const { id, thumbnail, category, timestamp, title, body } = props.data;

  const handleClick = () => {
    router.push(`/post/${id}`);
  };

  return (
    <WrapItem onClick={handleClick}>
      <Box maxW="30vw">
        <VStack align="start">
          <Image
            src={thumbnail}
            alt="Segun Adebayo"
            fit="cover"
            minW="100%"
            h="30vh"
            borderRadius="5px"
          />
          <Box mt="2px" mb="2px">
            <HStack>
              <Text fontWeight="bold" fontSize="xs" color="gray.500">
                {category.toUpperCase()}
              </Text>
              <Text fontSize="xs" color="gray.500">
                {timestamp.toUpperCase()}
              </Text>
            </HStack>
            <Text fontSize="2xl" fontWeight="bold">
              {title}
            </Text>
            <Text fontSize="xs" color="gray.500">
              {body}
            </Text>
          </Box>
        </VStack>
      </Box>
    </WrapItem>
  );
}

export default BlogCard;
