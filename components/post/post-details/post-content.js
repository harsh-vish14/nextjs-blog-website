import PostHeader from "./post-header";
import classes from "./post-content.module.css";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import "github-markdown-css";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import atomDark from "react-syntax-highlighter/dist/cjs/styles/prism/atom-dark";
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript'
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css'
import { Fragment } from "react";
import Head from "next/head";
SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);
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
    <Fragment>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt}></meta>
      </Head>
      <article className={classes.content}>
        <PostHeader title={post.title} image={imagePath} />
        <div className="markdown-body">
          <ReactMarkdown components={customRender}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </Fragment>
  );
};

export default PostContent;
