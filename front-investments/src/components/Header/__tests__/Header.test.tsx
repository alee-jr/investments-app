import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "..";

describe("header component", () => {
  it("should render Header", () => {
    const { getByText } = render(<Header title={"Ativo GOOG - Alphabet"} />);
    expect(getByText("Ativo GOOG - Alphabet")).toBeInTheDocument();
  });
});
