import React from "react";
import Login from "../../components/Auth/Login";
import user from "@testing-library/user-event";
import { waitFor, act } from "@testing-library/react";
import { render } from "../../utils/Testing";

test("renders login page", () => {
    const { getByText, getAllByPlaceholderText } = render(<Login />, {
      route: "/login",
    });
    expect(getByText(/Login/i)).toBeInTheDocument();
  
    // Two Input box should be present
    const inputElements = getAllByPlaceholderText(/Enter/i);
    expect(inputElements[0]).toBeInTheDocument();
    expect(inputElements[1]).toBeInTheDocument();
  });

  test("on submit, with valid input data login request happens", async () => {
    const userData = { email: "test@mail.com", password: "asdASD" };
    const { getByRole, getByText, getByTestId } = render(<Login />, {
      route: "/login",
    });
  
    const emailInput = getByTestId("email");
    const passwordInput = getByTestId("password");
  
    act(() => {
      user.type(emailInput, userData.email);
      user.type(passwordInput, userData.password);
    });
});