import { CardPost } from "./components/CardPost";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";

export function Home() {
  return (
    <>
      <Profile />
      <SearchInput />
      <PostListContainer>
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
        <CardPost />
      </PostListContainer>
    </>
  );
}
