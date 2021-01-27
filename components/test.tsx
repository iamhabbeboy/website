import matter from "gray-matter";
import Meta from "../components/Meta";
import Navigation from "../components/Navigation";
import BlogList from "../components/BlogList";

const Blog = ({ data, title, description }) => {
  const RealData = data.map(blog => matter(blog));
  const ListItems = RealData.map(listItem => listItem.data);
  return (
    <div className={""}>
      <Meta title="Abiodun Solomon::Blog" />
      <main>
        <Navigation />
        <div className="container mx-auto">
          <div>
            <h1 className="text-5xl">Blog</h1>
            <ul>
              {ListItems.map((blog, i) => (
                <BlogList
                  index={i}
                  title={blog.title}
                  slug={blog.slug}
                  description={blog.description}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Blog;

export async function getStaticProps() {
  const siteData = await import(`../config.json`);
  const fs = require("fs");

  const files = fs.readdirSync(`${process.cwd()}/content`, "utf-8");

  const blogs = files.filter(fn => fn.endsWith(".md"));

  const data = blogs.map(blog => {
    const path = `${process.cwd()}/content/${blog}`;
    const rawContent = fs.readFileSync(path, {
      encoding: "utf-8",
    });

    return rawContent;
  });

  return {
    props: {
      data: data,
      title: siteData.default.title,
      description: siteData.default.description,
    },
  };
}
