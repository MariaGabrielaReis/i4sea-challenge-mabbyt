import React from "react";
import { PostProps } from "../../context/CategoryContext";
import {
  Container,
  Content,
  Image,
  Info,
  InfoContainer,
  PostedAt,
  Title,
} from "./styles";

export function Post({
  url,
  imageSource,
  title,
  author,
  votes,
  comments,
  postedAt,
}: PostProps) {
  return (
    <Container>
      <Image source={{ uri: imageSource }} />
      <Content>
        <PostedAt>{postedAt}</PostedAt>
        <Title>{title}</Title>
        <InfoContainer>
          <Info>{author}</Info>
          <Info>{votes} votes</Info>
          <Info>{comments} comments</Info>
        </InfoContainer>
      </Content>
    </Container>
  );
}
