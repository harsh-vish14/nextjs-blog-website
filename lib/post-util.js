import matter from "gray-matter";
import fs from "fs";
import path from "path";


export function getPostsFiles() {
  return fs.readdirSync(postsDirectory);
}

export const getPostData = (filename) => {
  const postSlug = filename.replace(/\.md$/, "");
  const filePath = path.join(
    path.join(process.cwd(), "posts"),
    `${postSlug}.md`
  );
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
};

export const AllFeaturesPosts = () => {
  const allPosts = allPost();
  const featuredPost = allPosts.filter((post) => {
    return post.isFeatured;
  });

  return featuredPost;
};

export const allPost = () => {
  const postFiles = fs.readdirSync(postsDir);
  const post = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  return post.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};
