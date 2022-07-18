import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MockedProvider } from "@apollo/client/testing";
import _ from "lodash";
import "jest-canvas-mock";
import Daily from "..";
import { GET_ALL_DAILY } from "../../../../graphql/queries";
import { daily } from "../../../../mock/daily.mock";

const mocks = [
  {
    request: {
      query: GET_ALL_DAILY,
    },
    result: {
      data: {
        daily,
      },
    },
  },
];

describe("daily component", () => {
  it("should render daily", async () => {
    const component = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Daily />
      </MockedProvider>
    );
    expect(component).toBeTruthy();
  });
});
