import React from "react";
import renderer from "react-test-renderer";
import Socials from "../Socials";

test("Render: Socials", () => {
	const tree = renderer.create(<Socials />).toJSON();
	expect(tree).toMatchSnapshot();
});
