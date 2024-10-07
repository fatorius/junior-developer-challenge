import React from "react";
import renderer from "react-test-renderer";
import Logado from "../Logado";

test("Render: Logado", () => {
	const tree = renderer.create(<Logado />).toJSON();
	expect(tree).toMatchSnapshot();
});
