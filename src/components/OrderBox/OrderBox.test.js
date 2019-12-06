import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OrderBox from "./OrderBox";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const gameOrder = false;

describe("OrderBox compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <OrderBox
          gameOrder={gameOrder}
        />
      </MemoryRouter>
    );
  });
  it("1. component text test", () => {
    const orderText = component.find(".order-text");
    expect(orderText.text()).toBe("1P 차례입니다.");
  });
});
