import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./login";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";

describe("<Login/>", () => {
  test("renders content", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login></Login>
        </BrowserRouter>
      </Provider>
    );
    screen.getByText("Login");
    screen.getByText("Email");
    screen.getByText("Password");
    screen.getByText("Aceptar");
  });

  test("styles ok", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Login></Login>
        </BrowserRouter>
      </Provider>
    );
    screen.getByText("Login");
    //   expect(loginDiv.parentNode).toHaveClass("container-login")

    const buttonLogin = screen.getByText("Aceptar");
    expect(buttonLogin).toHaveClass("green");

    // let style = window.getComputedStyle(buttonLogin);
    //   expect(buttonLogin).toHaveStyle('background-color: green')
    // expect(style.color).toBe("green");
  });

  test('click button', async()=>{
    render(
        <Provider store={store}>
          <BrowserRouter>
            <Login></Login>
          </BrowserRouter>
        </Provider>
      );
      const buttonLogin = screen.getByText("Aceptar");
      await fireEvent.click(buttonLogin)
      screen.getByText("Error")


  })
});
