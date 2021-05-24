import { Fragment } from "react";
import Feature from "../components/home/featured-post";
import Hero from "../components/home/hero";
import { AllFeaturesPosts } from "../lib/post-util";
// title, image, excerpt, date, slug

export default function Home(props) {
  return (
    <Fragment>
      <Hero />
      <Feature posts={props.posts} />
    </Fragment>
  );
}

export const getStaticProps = () => {
  const posts = AllFeaturesPosts();
  return {
    props: {
      posts,
    },
  };
};
