import React from "react";
import renderer from "react-test-renderer";
import Botao from "../Botao";

test("Render: Botao", () => {
	const tree = renderer
		.create(
			<Botao
				onPress={() => {
					console.log("teste");
				}}
				buttonStyle={{}}
				textStyle={{}}
				label="Teste"
			/>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
