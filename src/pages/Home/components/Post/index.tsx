import { PostContainer } from "./styles";

export function Post() {
  return (
    <PostContainer to="/post/1">
      <div>
        <strong>JavaScript data types and data structures</strong>
        <span>A day ago</span>   
      </div>
      <p>Programming languages all have built-in data structures, but these often differ from one language to another. 
        This article attempts to list the built-in data structures available in JavaScript and what properties they have. 
        These can be used to build other data structures. 
      </p>
    </PostContainer>
  )
}