import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import "jest-canvas-mock";
import News from "..";
import { GET_ALL_NEWS } from "../../../../graphql/queries";
import { news } from "../../../../mock/news.mock";
import { ThemeProvider } from "styled-components";
import theme from "../../../../theme";

const mocks = [
  {
    request: {
      query: GET_ALL_NEWS,
    },
    result: {
      data: {
        news,
      },
    },
  },
];

describe("news component", () => {
  it("should render news", async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ThemeProvider theme={theme}>
          <News />
        </ThemeProvider>
      </MockedProvider>
    );
    expect(component).toBeTruthy();
    expect(await screen.findByText("Últimas de Alphabet")).toBeInTheDocument();
  });
});
