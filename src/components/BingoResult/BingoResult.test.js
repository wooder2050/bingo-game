import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import BingoResult from "./BingoResult";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const bingoArray1P = [[1, 2]];
const bingoArray2P = [
  [2, 3],
  [3, 4]
];
const completeBingo1P = [0];
const completeBingo2P = [1];

describe("BingoResult compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <BingoResult
          completeBingo1P={completeBingo1P}
          completeBingo2P={completeBingo2P}
          bingoArray1P={bingoArray1P}
          bingoArray2P={bingoArray2P}
        />
      </MemoryRouter>
    );
  });
  it("1. component text test", () => {
    const completeList1 = component.find(".complete-list").at(0);
    const completeList2 = component.find(".complete-list").at(1);
    expect(completeList1.text()).toBe("[1,2]");
    expect(completeList2.text()).toBe("[3,4]");
  });
});
