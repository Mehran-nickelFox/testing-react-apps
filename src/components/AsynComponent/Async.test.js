import { render, screen } from "@testing-library/react";
import Async from "./Async";

// describe("<Async />", () => {
//   test("renders posts if request succeeds", async () => {
//     //Arrange:
//     render(<Async />);

//     //Act:
//     //Assert:
//     const listElement = await screen.findAllByRole("listitem");
//     expect(listElement).not.toHaveLength(0);
//   });
// });
// eslint-disable-next-line no-lone-blocks
{
  /*
The above code works but is not ideal
the Question is why it is not ideal : Bcoz we are sending an HTTP request and testing it will hammer down
the server with multiple requests....
Also while posting data there is a chance of our test posting data to the server
to face this problem we either don't send the real request or
send the request to a fake server or testing server

to not send a request we use a mock or dummy function and check the
working of ou component and for that jest has produced a way for us*/
}

//-----------------------------------------

describe("<Async />", () => {
  test("renders posts if request succeeds", async () => {
    //what we do here is create a mock function that will overRide the fetch from the component

    window.fetch = jest.fn();
    // eslint-disable-next-line no-lone-blocks
    {
      /* This mockResolvedValueOnce takes in a object
whose key is json as what we fetch from the server and this json property holds an async function 
which takes an arrray acting as the recieved data */
    }
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "First Post" }],
    });
    //Arrange:
    render(<Async />);

    //Act:
    //Assert:
    const listElement = await screen.findAllByRole("listitem");
    expect(listElement).not.toHaveLength(0);
  });
});

//we are just simulating the Async component and are not trafficking anything