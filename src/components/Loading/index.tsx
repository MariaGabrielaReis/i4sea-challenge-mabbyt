import React from "react";
import { ActivityIndicator } from "react-native";
import theme from "../../theme";

import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <ActivityIndicator color={theme.COLORS.WHITE} />
    </Container>
  );
}
