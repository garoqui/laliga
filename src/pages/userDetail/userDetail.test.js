import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store/index";
import UserDetail from "./userDetail";

describe("userDetail", () => {

  const comp = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <UserDetail ></UserDetail>
        </BrowserRouter>
      </Provider>
    );
  };

  test("render userDetail its ok!", async () => {
    await comp();

    screen.getByText("Información del Usuario");
    screen.getByText(/Name :/);
    screen.getByText(/Lastname :/);
    screen.getByText(/email :/);
    //buttons
    screen.getByText("Back");
    screen.getByText("Edit");
    screen.getByText("Delete");
  });

  test("styles userDetail OK!", async() => {
    await comp();

    const buttonBack = screen.getByRole('button',{name: /back/i})
    expect(buttonBack).toHaveClass("green")
    const buttonEdit = screen.getByRole('button',{name: /edit/i})
    expect(buttonEdit).toHaveClass("orange")
    const buttonDelete = screen.getByRole('button',{name: /delete/i})
    expect(buttonDelete).toHaveClass("red")
  });
});
