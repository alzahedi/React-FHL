import * as React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "../HelloWorld.ReactView";
import { act } from "react-dom/test-utils";

test("renders HelloWorld Component contains text Content", () => {
  render(<HelloWorld />);
  expect(screen.getByText("Hello World!")).toBeInTheDocument();
});


test("renders HelloWorld Component snapshot test", async () => {

  await act( async () => expect(render(<HelloWorld />)).toMatchSnapshot());
 ;
});