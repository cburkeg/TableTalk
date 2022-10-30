import type { TOtherBlog } from '../data/other-blogs'

type Props = {
  blog: TOtherBlog
}

export default function OtherBlog({ blog }: Props) {
  return (
    <li className="other-blog">
      <a href={blog.link}>{blog.blogTitle}</a>
    </li>
  )
}
