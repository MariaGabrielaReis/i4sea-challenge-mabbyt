import React from "react";
import { SafeAreaView, FlatList } from "react-native";

import { Header, Navbar, Post } from "../../components";
import { useCategoryContext } from "../../context/CategoryContext";

export function Home() {
  const { posts } = useCategoryContext();

  return (
    <SafeAreaView>
      <Header />
      <Navbar />

      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Post
            id={item.id}
            title={item.title}
            author={item.author}
            votes={item.votes}
            comments={item.comments}
            postedAt={item.postedAt}
            url={item.url}
            imageSource={item.imageSource}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
