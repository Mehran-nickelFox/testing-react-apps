import { render, screen } from "@testing-library/react";
import Async from "./Async";
describe("<Async />", () => {
  test("renders posts if request succeeds", async () => {
    //Arrange:
    render(<Async />);

    //Act:
    //Assert:
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});

//This Testing type works but it is not considered to be ideal for testing
//there is an ideal way which is continued in jest branch