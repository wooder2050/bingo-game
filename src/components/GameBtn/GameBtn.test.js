import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import GameBtn from "./GameBtn";
import { MemoryRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
const gameState = false;
const onLoad = jest.fn();

describe("GameBtn compoment test", () => {
  let component;
  beforeEach(() => {
    component = mount(
      <MemoryRouter>
        <GameBtn
          onLoad={onLoad}
          gameState={gameState}
        />
      </MemoryRouter>
    );
  });
  it("1. component text test", () => {
    const gameBtn = component.find(".game-btn-text");
    expect(gameBtn.text()).toBe("게임 시작");
  });
});
