import { useQuery } from "react-query";
import axios from "axios";
import { Heading } from "@chakra-ui/layout";
import { Wrap, WrapItem } from "@chakra-ui/layout";

import BlogCard from "../components/BlogCard";

function index() {
  const { isLoading, isError, data } = useQuery("blogData", async () => {
    const { data } = await axios.get("http://127.0.0.1:3004/blog");
    console.log(data);
    return data;
  });

  if (isLoading) {
    return <Heading>Loading....</Heading>;
  }
  if (isError) {
    return <Heading>Error....</Heading>;
  }

  return (
    <Wrap spacing="30px" justify="center" overflow="hidden">
      {data && data.map((item) => <BlogCard data={item} key={item.id} />)}
    </Wrap>
  );
}

export default index;
