/* eslint-disable no-unused-vars */
import expect from "expect";
import { mount, shallow } from "enzyme";
import TestUtils from "react-addons-test-utils";
import React from "react";
import NotFound from "./notFound.jsx";

describe("<NotFound />", () => {

    it("The text passed to the NotFound component is renderred in a paragraph below the image", () => {
        const props = {
            message: "Nothing matched the search criteria"
        };
        const expected = props.message;
        const wrapper = shallow(<NotFound {...props} />);
        const actual = wrapper.find("p").children().get(0);

        expect(actual).toEqual(expected);

    });

});