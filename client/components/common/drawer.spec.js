/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import Drawer from "./drawer.jsx";

describe("<Drawer />", () => {

    it("The Drawer element includes the Home and Recipes Page links", () => {

        const wrapper = shallow(<Drawer />);
        const homeLinkMessage = wrapper.find("nav").children().get(0).props.children;
        const recipeLinkMessage = wrapper.find("nav").children().get(1).props.children;
        expect(homeLinkMessage).toEqual("Home");
        expect(recipeLinkMessage).toEqual("Recipes");

    });

});