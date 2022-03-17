import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
test("renders hello World", () => {
  //Arrange:
  render(<Greeting />);
  //Act:in this expample ther is notting to act upon
  //so we will do it later

  //Assert:
  const helloWorldElement = screen.getByText("Hello World");
  expect(helloWorldElement).toBeInTheDocument();
});
