import {
	StyleProp,
	Text,
	TextStyle,
	TouchableOpacity,
	ViewStyle,
} from "react-native";

import React from "react";

const Botao = (props: {
	onPress: CallableFunction;
	label: string;
	buttonStyle: StyleProp<ViewStyle>;
	textStyle: StyleProp<TextStyle>;
}) => {
	return (
		<TouchableOpacity
			onPress={() => props.onPress()}
			style={props.buttonStyle}>
			<Text style={props.textStyle}>{props.label}</Text>
		</TouchableOpacity>
	);
};

export default Botao;
