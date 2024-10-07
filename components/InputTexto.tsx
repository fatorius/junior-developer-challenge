import { TextInput } from "react-native";

import React, { useState } from "react";
import VALUES from "@/VALUES";

const InputTexto = (props: {
	value: string | undefined;
	onChange: CallableFunction | undefined;
	otherProps: any;
}) => {
	const [emFoco, setEmFoco] = useState<boolean>(false);

	return (
		<TextInput
			onFocus={() => setEmFoco(true)}
			onBlur={() => setEmFoco(false)}
			value={props.value}
			onChangeText={props.onChange}
			placeholderTextColor={VALUES.Tema.corDoTextoEscuro}
			style={[
				{
					fontFamily: VALUES.Fontes.regular,
					fontSize: VALUES.TamanhoFonte.small,
					padding: VALUES.Espacamento * 2,
					backgroundColor: props.otherProps.errorMsg
						? VALUES.Tema.corSecundaria
						: VALUES.Tema.fundoErro,
					borderRadius: VALUES.Espacamento,
					marginVertical: VALUES.Espacamento,
					borderWidth: props.otherProps.errorMsg ? 0 : 3,
					borderColor: props.otherProps.errorMsg
						? VALUES.Tema.fundo
						: VALUES.Tema.erro,
				},
				emFoco && {
					borderWidth: 3,
					borderColor: props.otherProps.errorMsg
						? VALUES.Tema.corPrimaria
						: VALUES.Tema.erro,
					shadowOffset: { width: 4, height: VALUES.Espacamento },
					shadowColor: VALUES.Tema.corPrimaria,
					shadowOpacity: 0.2,
					shadowRadius: VALUES.Espacamento,
				},
			]}
			{...props.otherProps}
		/>
	);
};

export default InputTexto;
