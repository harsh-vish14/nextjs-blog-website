import PostContent from "../../components/post/post-details/post-content";
import { getPostData } from "../../lib/post-util";

const PostDetail = (props) => {
  return <PostContent post={props.data} />;
};

export const getStaticProps = (context) => {
  const { params } = context;
  const { postSlug } = params;

  const data = getPostData(postSlug);

  return {
    props: {
      data,
    },
    revalidate: 500,
  };
};

export const getStaticPaths = (context) => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default PostDetail;
