import { act } from "@testing-library/react";
import StoreData from "../StoreData";
import "@testing-library/jest-dom";

it("Unit Test: Storing data to local storage", async () => {
  const data = ["Pre-Testing", 4, 49735, true, true, 1, 4];

  act(() => {
    StoreData.storeData(data);
  });

  expect(localStorage.getItem("1")).toBe(JSON.stringify(data));
});

it("Unit Test: Storing key value pair to local storage", async () => {
  const data = { key: "name", value: "John" };

  act(() => {
    StoreData.storeKeyValue(data.key, data.value);
  });

  expect(localStorage.getItem(data.key)).toBe(data.value);
});

it("Unit Test: Exporting data from local storage", async () => {
  const data = [
    ["Pre-Testing", 1, 1000, true, true, 1, 4],
    ["Pre-Testing", 2, 1000, true, true, 4, 4],
  ];

  act(() => {
    localStorage.setItem(1, data[0]);
    localStorage.setItem(2, data[1]);
  });

  URL.createObjectURL = jest.fn();
  document.body.appendChild = jest.fn();
  document.body.appendChild.mockReturnValueOnce({ click: jest.fn() });

  act(() => {
    StoreData.exportData();
  });

  expect(URL.createObjectURL).toHaveBeenCalled();
});
