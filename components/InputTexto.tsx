import { TextInput, TextInputProps } from "react-native";

import React, { useState } from "react";
import VALUES from "@/VALUES";

const InputTexto: React.FC<TextInputProps> = ({ ...otherProps }) => {
	const [emFoco, setEmFoco] = useState<boolean>(false);

	return (
		<TextInput
			onFocus={() => setEmFoco(true)}
			onBlur={() => setEmFoco(false)}
			placeholderTextColor={VALUES.Tema.corDoTextoEscuro}
			style={[
				{
					fontFamily: VALUES.Fontes.regular,
					fontSize: VALUES.TamanhoFonte.small,
					padding: VALUES.Espacamento * 2,
					backgroundColor: VALUES.Tema.corSecundaria,
					borderRadius: VALUES.Espacamento,
					marginVertical: VALUES.Espacamento,
				},
				emFoco && {
					borderWidth: 3,
					borderColor: VALUES.Tema.corPrimaria,
					shadowOffset: { width: 4, height: VALUES.Espacamento },
					shadowColor: VALUES.Tema.corPrimaria,
					shadowOpacity: 0.2,
					shadowRadius: VALUES.Espacamento,
				},
			]}
			{...otherProps}
		/>
	);
};

export default InputTexto;
