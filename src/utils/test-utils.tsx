import "@testing-library/jest-native/extend-expect";

import {
  RenderAPI,
  RenderOptions,
  render,
} from "@testing-library/react-native";

import React from "react";

type AllTheProvidersProps = {
  children: React.ReactElement<any>;
};

const AllTheProviders = ({ children }: AllTheProvidersProps) => {
  return <>{children}</>;
};

const customRender = (
  ui: React.ReactElement<any>,
  options?: RenderOptions
): RenderAPI => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from "@testing-library/react-native";

// override render method
export { customRender as render };
