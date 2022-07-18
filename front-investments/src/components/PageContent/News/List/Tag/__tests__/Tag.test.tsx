import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../../theme";
import Tag from "..";

describe("tag component", () => {
  it("should render tag", async () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Tag label={"Bullish"} />
      </ThemeProvider>
    );
    expect(component).toBeTruthy();
  });
  it("should not render tag label", async () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Tag label={"Neutral"} />
      </ThemeProvider>
    );
    expect(component.queryByText("Neutral")).not.toBeInTheDocument();
  });
  it("should test label Bullish color", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Tag label={"Bullish"} />
      </ThemeProvider>
    );
    expect(await screen.getByTestId("tag")).toHaveStyle(
      `background-color: rgb(22, 199, 132);`
    );
  });

  it("should test label Somewhat-Bullish color", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Tag label={"Somewhat-Bullish"} />
      </ThemeProvider>
    );
    expect(await screen.getByTestId("tag")).toHaveStyle(
      `background-color:  rgb(255, 215, 0);`
    );
  });

  it("should test label Bearish color", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Tag label={"Bearish"} />
      </ThemeProvider>
    );
    expect(await screen.getByTestId("tag")).toHaveStyle(
      `background-color:  rgb(201, 20, 35);`
    );
  });

  it("should test label Somewhat-Bearish color", async () => {
    render(
      <ThemeProvider theme={theme}>
        <Tag label={"Somewhat-Bearish"} />
      </ThemeProvider>
    );
    expect(await screen.getByTestId("tag")).toHaveStyle(
      `background-color:  rgb(255, 165, 0);`
    );
  });
});
