import React from "react"
import renderer from "react-test-renderer"
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import LandingPage from "./LandingPage"
// import { render } from "react-dom";

describe("Landing page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LandingPage/>)
      .toJSON()
    expect(tree).toMatchSnapshot()
  });

  it("Renders prepare to code title" , () => {
    render(<LandingPage/>)
    const message = "Prepare to code"
    expect(screen.getByText(message)).toBeInTheDocument();
  });

})