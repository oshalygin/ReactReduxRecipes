/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import Navigation from "./navigation.jsx";

describe("<Navigation />", () => {

    it("The navigation element includes the Home and Recipes Page link", () => {

        const wrapper = shallow(<Navigation />);
        const homeLinkMessage = wrapper.find("nav").children().get(0).props.children;
        const recipeLinkMessage = wrapper.find("nav").children().get(1).props.children;
        expect(homeLinkMessage).toEqual("Home");
        expect(recipeLinkMessage).toEqual("Recipes");

    });

});