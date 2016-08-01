/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import Description from "./description.jsx";


function setup() {
    return shallow(<Description />);
}

describe("<Description />", () => {

    it("Includes three headers which describe the application", () => {
        const wrapper = setup();
        let actual = wrapper.find("h4").children(0).length;
        let expected = 2;

        expect(actual).toEqual(expected);

    });

});