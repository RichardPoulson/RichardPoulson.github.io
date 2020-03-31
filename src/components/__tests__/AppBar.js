import React from "react"
import renderer from "react-test-renderer"

import AppBar from "../AppBar"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<AppBar />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})