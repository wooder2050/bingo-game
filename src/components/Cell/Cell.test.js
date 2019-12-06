import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Cell from "./Cell";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const number = 1;
const team = false;
const clickCell = jest.fn();
const clickedNumber = [1, 2];

describe("Cell compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <Cell
          key={1}
          number={number}
          team={team}
          clickCell={clickCell}
          clickedNumber={clickedNumber}
        />
      </MemoryRouter>
    );
  });
  it("1. component text test", () => {
    const cell = component.find(".Cell");
    expect(cell.text()).toBe("1");
  });
});
