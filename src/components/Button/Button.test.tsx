import { Button } from "./Button.component";
import React from "react";
import { render } from "../../utils/test-utils";

describe("<Button />", () => {
  it("should render the component", () => {
    const { getByLabelText } = render(<Button title="button" />);

    expect(getByLabelText(/button/i)).toBeDefined();
  });

  it("should render a button with color primary", () => {
    const { getByLabelText, getByText } = render(<Button title="button" />);

    expect(getByLabelText(/button/i)).toHaveStyle({
      backgroundColor: "black",
    });
    expect(getByText(/button/i)).toHaveStyle({
      color: "white",
    });
  });
});
