import React from "react";
import renderer from "react-test-renderer";
import InputTexto from "../InputTexto";

test("Render: InputTexto", () => {
	const tree = renderer.create(<InputTexto />).toJSON();
	expect(tree).toMatchSnapshot();
});
