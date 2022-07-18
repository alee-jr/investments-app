import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { ThemeProvider } from "styled-components";
import theme from "../../../../../../theme";
import Card from "..";

describe("card component", () => {
  it("should render card", async () => {
    const component = render(
      <ThemeProvider theme={theme}>
        <Card
          banner_image={
            "https://static01.nyt.com/images/2022/07/18/multimedia/18dc-globaltax01/18dc-globaltax01-articleLarge.jpg?quality=75&auto=webp&disable=upscal"
          }
          url={
            "https://www.nytimes.com/2022/07/18/us/politics/how-joe-manchin-left-a-global-tax-deal-in-limbo.html"
          }
          title={"How Joe Manchin Left a Global Tax Deal in Limbo"}
          summary={
            "Treasury Secretary Janet L. Yellen's signature achievement is in jeopardy if the United States cannot ratify the tax agreement that she brokered."
          }
          time_published={"20220718T194002"}
        />
      </ThemeProvider>
    );
    const image = await screen.getByTestId("image");

    expect(component).toBeTruthy();
    expect(
      await screen.findByText("How Joe Manchin Left a Global Tax Deal in Limbo")
    ).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://static01.nyt.com/images/2022/07/18/multimedia/18dc-globaltax01/18dc-globaltax01-articleLarge.jpg?quality=75&auto=webp&disable=upscal"
    );
    expect(
      await screen.findByText(
        "Treasury Secretary Janet L. Yellen's signature achievement is in jeopardy if the United States cannot ratify the tax agreement that she brokered."
      )
    ).toBeInTheDocument();
  });
});
