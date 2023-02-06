import React from "react";
import { Categories, useCategoryContext } from "../../context/CategoryContext";
import { Container, NavLink } from "./styles";

export function Navbar() {
  const { category, setCategory } = useCategoryContext();

  const navbarCategories: Categories[] = [
    Categories.new,
    Categories.hot,
    Categories.top,
  ];

  return (
    <Container>
      {navbarCategories.map(navbarCategory => {
        return (
          <NavLink
            key={navbarCategory}
            isActive={category === navbarCategory}
            onPress={() => setCategory(navbarCategory)}
          >
            {navbarCategory}
          </NavLink>
        );
      })}
    </Container>
  );
}
