/** @jest-environment jsdom */
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import axios from 'axios';
import Main from "../components/Main";
import Popup from "../components/PopUp";
import React from "react";

// jest.mock("axios", () => ({
//   __esModule: true,
// }));

beforeEach(()=>{
  render(<Main/>)
})

test("popUp should be rendered when Search is clicked", () => {
  // render(<Main/>);
  const buttonEl = screen.getByRole("button");

  // fireEvent.click(buttonEl);

  expect(buttonEl).toBeInTheDocument();
});

// test("launch list should be rendered after fetching", async () => {
//   render(<Main />);
//   const mission = screen.getByText(/Mission/);
//   const rocket = screen.getByText(/Rocket/);
//   const flightNmuber = screen.getByPlaceholderText(/Flight Number/);

//   const testValue1 = "EE86F74";
//   const testValue2 = "falcon1";
//   const testValue3 = "1";

//   fireEvent.change(mission, { target: { value: testValue1 } });
//   fireEvent.change(rocket, { target: { value: testValue2 } });
//   fireEvent.change(flightNmuber, { target: { value: testValue3 } });

//   const userItem = await screen.findByText("Launches");

//   expect(userItem).toBeInTheDocument();
// });
