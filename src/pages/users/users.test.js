import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Users from "./users";

describe("users list", () => {
  const comp = () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Users></Users>
        </BrowserRouter>
      </Provider>
    );
  };

  test("users component render ok!", () => {
    comp();
    screen.getByText("Usuarios");
  });
});
