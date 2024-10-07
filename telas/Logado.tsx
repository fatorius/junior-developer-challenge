import VALUES from "@/VALUES";
import { View, Text } from "react-native";

function Logado() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}>
			<Text
				style={{
					fontSize: VALUES.TamanhoFonte.xLarge,
					color: VALUES.Tema.corPrimaria,
					fontFamily: VALUES.Fontes.negrito,
					textAlign: "center",
				}}>
				Bem vindo! Voce está logado
			</Text>
		</View>
	);
}

export default Logado;
