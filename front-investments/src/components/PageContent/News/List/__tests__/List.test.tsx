import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../theme";
import List from "..";
import { news } from "../../../../../mock/news.mock";

describe("list component", () => {
  it("should render list", async () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <List news={news} />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
    expect(
      await screen.findByText("How Joe Manchin Left a Global Tax Deal in Limbo")
    ).toBeInTheDocument();
  });
});
