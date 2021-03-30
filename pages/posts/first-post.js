import Link from 'next/link';
import { Fragment } from 'react';

export default function FirstPost() {
  /**
   * a tag: Load the full page(새로고침)
   * Link Component: Client-side navgation(route만 이동)
   * 외부 링크 이동 시, <a> tag 사용할 것.
   */
  return (
    <Fragment>
      <h1>First Post</h1>
      <h2>
        <a href={`/`}>Home</a>
        <Link href={`/`}>Home</Link>
      </h2>
    </Fragment>
  );
}
