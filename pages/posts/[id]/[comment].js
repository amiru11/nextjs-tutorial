import { useRouter } from 'next/router';
function Post() {
  const router = useRouter()
  const { comment } = router.query;

  return (
    <h1>Comment: {comment}</h1>
  )
};

export default Post;