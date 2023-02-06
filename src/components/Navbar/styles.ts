import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 2rem;
`;

export const NavLink = styled.Text<{ isActive?: boolean }>`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, isActive }) =>
    isActive ? theme.COLORS.TEAL : theme.COLORS.GRAY};
`;
