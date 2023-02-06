import React from "react";
import { SafeAreaView, FlatList, Text } from "react-native";

import { Header, Navbar, Post } from "../../components";
import { useCategoryContext } from "../../context/CategoryContext";
import theme from "../../theme";

export function Home() {
  const { posts } = useCategoryContext();

  return (
    <SafeAreaView style={{ backgroundColor: theme.COLORS.BLACK, flex: 1 }}>
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
