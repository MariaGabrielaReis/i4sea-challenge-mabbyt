import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  padding: 24px;
`;

export const Content = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
  width: 200px;
  height: 40px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoContainer = styled.View`
  width: 78%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const PostedAt = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 16px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
