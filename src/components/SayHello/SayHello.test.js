import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SayHello from "./SayHello";
describe("<SayHello/>", () => {
  test("renders Good to see You if the button was not clicked", () => {
    //Arrange:
    render(<SayHello />);
    //Act:
    //nothing
    //Assert:
    const paragraphElement = screen.getByText("Good to see you!");
    expect(paragraphElement).toBeInTheDocument();
  });
  test("renders `Changed!` if the button was clicked", () => {
    //Arrange:
    render(<SayHello />);
    //Act:
    const butttonElement = screen.getByRole("button");
    userEvent.click(butttonElement);
    //Assert:
    const element = screen.getByText("Changed!");
    //the actual assertion is done using expect
    expect(element).toBeInTheDocument();
  });
  test("doesnot render Good to see You if the button was clicked", () => {
    //Arrange:
    render(<SayHello />);
    //Act:
    const changedElement = screen.getByRole("button");
    userEvent.click(changedElement);
    //Assert:
    const notRenders = screen.queryByText("Good to see you!", { exact: false });
    expect(notRenders).toBeNull()
  });
});
