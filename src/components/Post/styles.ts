import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const PostedAt = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY};
`;

export const Image = styled.Image`
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
`;
