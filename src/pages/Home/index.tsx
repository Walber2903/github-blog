import { useCallback, useEffect, useState } from "react";
import { CardPost } from "./components/CardPost";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { PostListContainer } from "./styles";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME;
const repoName = import.meta.env.VITE_GITHUB_REPONAME;

export interface IPost {
  length: number;
  title: string;
  body: string;
  created_at: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Home() {
  const [posts, setPosts] = useState<IPost>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = useCallback(
    async (query: string = "") => {
      try {
        setIsLoading(true);
        const response = await api.get(
          `/search/issues?q=${query}%20repo:${username}/${repoName}`
        );

        setPosts(response.data.items);
      } finally {
        setIsLoading(false);
      }
    },
    [posts]
  );

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Profile />
      <SearchInput postsLength={posts.length} getPosts={getPosts} />
      {isLoading ? (
        <Spinner />
      ) : (
        <PostListContainer>
          {posts.map((post: IPost) => (
            <CardPost key={post.number} post={post} />
          ))}
        </PostListContainer>
      )}
    </>
  );
}
