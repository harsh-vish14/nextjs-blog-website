import PostGrid from "../post/post-grid";
import classes from "./featured-post.module.css";

const Feature = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Feature Post</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default Feature;
