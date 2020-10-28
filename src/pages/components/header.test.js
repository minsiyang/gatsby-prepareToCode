import React from "react"
import renderer from "react-test-renderer"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Header from "./header"
// import { render } from "react-dom";

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Header/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it("Renders prepare to code title" , () => {
    render(<Header/>)
    const message = "Prepare to code"
    expect(screen.getByText(message)).toBeInTheDocument();
  });

})