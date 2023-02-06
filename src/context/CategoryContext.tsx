import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services/api";

export type PostProps = {
  id: string;
  url: string;
  imageSource: string;
  title: string;
  author: string;
  votes: number;
  comments: number;
  postedAt: string;
};

export enum Categories {
  new = "New",
  hot = "Hot",
  top = "Top",
}

type CategoryContextData = {
  category: Categories;
  setCategory: Dispatch<SetStateAction<Categories>>;
  posts: PostProps[];
};

type CategoryProviderProps = {
  children: ReactNode;
};

export const CategoryContext = createContext({} as CategoryContextData);

export function CategoryProvider({ children }: CategoryProviderProps) {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [category, setCategory] = useState<Categories>(Categories.new);

  useEffect(() => {
    api.get(`/${category.toString().toLowerCase()}.json`).then(response => {
      console.log("dadosss: ", response.data.data.children[0].data.author);
      const posts: PostProps[] = [];
      response.data.data.children.map((post: any) => {
        posts.push({
          id: post.data.id,
          url: post.data.permalink,
          imageSource: post.data.url,
          title: post.data.title,
          author: post.data.author,
          votes: post.data.ups,
          comments: post.data.num_comments,
          postedAt: post.data.created,
        });
      });

      setPosts(posts);
    });
  }, [category]);

  return (
    <CategoryContext.Provider value={{ category, setCategory, posts }}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategoryContext = () => useContext(CategoryContext);
