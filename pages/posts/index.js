import AllPost from "../../components/post/all-post";
import { allPost } from "../../lib/post-util";
const Post = (props) => {
  return <AllPost posts={props.posts} />;
};

export const getStaticProps = () => {
  const posts = allPost();

  return {
    props: {
      posts,
    },
  };
};

export default Post;
