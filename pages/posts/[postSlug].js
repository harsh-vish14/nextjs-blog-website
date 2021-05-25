import PostContent from "../../components/post/post-details/post-content";
import { getPostData, getPageFiles } from "../../lib/post-util";

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

export const getStaticPaths = () => {
  const postFilenames = getPageFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { postSlug: slug } })),
    fallback: "blocking",
  };
};

export default PostDetail;
