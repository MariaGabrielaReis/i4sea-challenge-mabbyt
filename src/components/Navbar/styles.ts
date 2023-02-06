import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 32px;
  padding: 16px;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme }) => theme.COLORS.TEAL};
`;

export const NavLink = styled.Text<{ isActive?: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.TEAL : theme.COLORS.GRAY};
`;
