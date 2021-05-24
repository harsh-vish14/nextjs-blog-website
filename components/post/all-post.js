import PostGrid from "./post-grid";
import classes from "./all-post.module.css";
const AllPost = (props) => {
  return (
    <section className={classes.posts}>
      <h1>All Post</h1>
      <PostGrid posts={props.posts} />
    </section>
  );
};

export default AllPost;
