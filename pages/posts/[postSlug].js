import PostContent from "../../components/post/post-details/post-content";
import { getPostData } from "../../lib/post-util";

const PostDetail = (props) => {
  return <PostContent post={props.data} />;
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const { postSlug } = params;

  const data = await getPostData(postSlug);
  
  return {
    props: {
      data,
    },
    revalidate: 500,
  };
};

export const getStaticPaths = (context) => {
  const postFilenames = getPostsFiles();
const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

return {
  paths: slugs.map((slug) => ({ params: { slug: slug } })),
  fallback: "blocking",
};
};

export default PostDetail;
