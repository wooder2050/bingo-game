import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import EndingModal from "./EndingModal";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const successPlayer = ["1p"];
const resetGame = jest.fn();

describe("EndingModal compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <EndingModal
          successPlayer={successPlayer}
          resetGame={resetGame}
        />
      </MemoryRouter>
    );
  });
  it("1. component text test", () => {
    const endingModal = component.find(".ending-modal-text");
    expect(endingModal.text()).toBe("1p가 빙고를 완성했습니다.");
  });
});
