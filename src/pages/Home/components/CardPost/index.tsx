import { IPost } from "../..";
import { relativeDateFormatter } from "../../../../utils/formatter";
import { CardPostContainer } from "./styles";

interface PostProps {
  post: IPost;
}

export function CardPost({ post }: PostProps) {
  const formattedDate = relativeDateFormatter(post.created_at);

  return (
    <CardPostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span>{formattedDate}</span>
      </div>
      <p>{post.body}</p>
    </CardPostContainer>
  );
}
