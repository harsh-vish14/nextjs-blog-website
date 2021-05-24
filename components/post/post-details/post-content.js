import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import "github-markdown-css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "Getting Started with nextjs",
//   image: "getting-started-nextjs.png",
//   excerpt:
//     "Next Js is a React Framework which Takes react development to next level and We can take care of SEO optimization in Next JS we can do server-side-rending",
//   date: "2022-05-10",
//   content: "# This is Title",
// };
const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRender = {
    p(para) {
      const { node } = para;
      if (node.children[0].tagName === "img") {
        const imageDate = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${imageDate.properties.src}`}
              alt={imageDate.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{para.children}</p>;
    },
    code(code) {
      const { className, children } = code;
      const language = className.split("-")[1];
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <div className="markdown-body">
        <ReactMarkdown components={customRender}>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
};

export default PostContent;
