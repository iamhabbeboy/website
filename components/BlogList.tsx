import React from 'react';
import Link from "next/link";

type Props = {
  index: number;
  title: string;
  slug: string,
  description: string;
};

const BlogList: React.FC<Props> = ({ index, title, slug, description }) => {
  return (
    <li key={index}>
      <Link href={`/${slug}`}>
        <a>{title}</a>
      </Link>
      <p>{description}</p>
    </li>
  );
};

export default BlogList;
