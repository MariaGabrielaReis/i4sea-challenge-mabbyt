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
  function formatNumber(value: number) {
    if (value >= 10000) return `${Math.ceil(value / 10000)}M`;
    if (value >= 1000) return `${Math.ceil(value / 1000)}k`;
    return value;
  }

  return (
    <Container>
      <Image source={{ uri: imageSource }} />
      <Content>
        <PostedAt>{postedAt}</PostedAt>
        <Title>{title}</Title>
        <InfoContainer>
          <Info>{author}</Info>
          <Info>{formatNumber(votes)} votes</Info>
          <Info>{formatNumber(comments)} comments</Info>
        </InfoContainer>
      </Content>
    </Container>
  );
}
