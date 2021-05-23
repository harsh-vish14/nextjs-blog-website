import { Fragment } from "react";
import Feature from "../components/home/featured-post";
import Hero from "../components/home/hero";
// title, image, excerpt, date, slug
const DUMMY_POST = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with nextjs",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next Js is a React Framework which Takes react development to next level and We can take care of SEO optimization in Next JS we can do server-side-rending",
    date: "2022-05-10",
  },
  {
    slug: "getting-started-with-nextjs1",
    title: "Getting Started with nextjs",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Framework which Takes react development to next level and We can take care of SEO optimization in Next JS we can do server-side-rending",
    date: "2022-05-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting Started with nextjs",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Framework which Takes react development to next level and We can take care of SEO optimization in Next JS we can do server-side-rending",
    date: "2022-05-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting Started with nextjs",
    image: "getting-started-with-nextjs.png",
    excerpt:
      "Next Js is a React Framework which Takes react development to next level and We can take care of SEO optimization in Next JS we can do server-side-rending",
    date: "2022-05-10",
  },
];

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Feature posts={DUMMY_POST} />
    </Fragment>
  );
}
