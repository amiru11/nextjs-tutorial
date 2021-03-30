import { useRouter } from 'next/router';
import Link from 'next/link';
import { Fragment } from 'react';

function Post() {
  const router = useRouter()
  const { id } = router.query;

  return (
    <Fragment>
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/posts/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/posts/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </Fragment>
  )
};

export default Post;