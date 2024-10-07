import VALUES from "@/VALUES";
import {
	Dimensions,
	ImageBackground,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesType } from "@/types";

type Props = NativeStackScreenProps<RoutesType, "Inicio">;

const { height } = Dimensions.get("window");

const Inicio: React.FC<Props> = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View>
				<ImageBackground
					style={{
						height: height / 2.5,
					}}
					resizeMode="contain"
					source={require("../assets/images/draw-tela-inicial.png")}
				/>
				<View
					style={{
						paddingHorizontal: VALUES.Espacamento * 4,
						paddingTop: VALUES.Espacamento * 4,
					}}>
					<Text
						style={{
							fontSize: VALUES.TamanhoFonte.xxLarge,
							color: VALUES.Tema.corPrimaria,
							fontFamily: VALUES.Fontes.negrito,
							textAlign: "center",
						}}>
						Encontre a vaga ideal aqui!
					</Text>

					<Text
						style={{
							fontSize: VALUES.TamanhoFonte.small,
							color: VALUES.Tema.corDoTexto,
							fontFamily: VALUES.Fontes.regular,
							textAlign: "center",
							marginTop: VALUES.Espacamento * 2,
						}}>
						Explore todas as posições abertas com base nos seus
						interesses e área de formação
					</Text>
				</View>
				<View
					style={{
						paddingHorizontal: VALUES.Espacamento * 2,
						paddingTop: VALUES.Espacamento * 6,
						flexDirection: "row",
					}}>
					<TouchableOpacity
						onPress={() => navigation.navigate("Login")}
						style={{
							backgroundColor: VALUES.Tema.corPrimaria,
							paddingVertical: VALUES.Espacamento * 1.5,
							paddingHorizontal: VALUES.Espacamento * 2,
							width: "48%",
							borderRadius: VALUES.Espacamento,
							shadowColor: VALUES.Tema.corPrimaria,
							shadowOffset: {
								width: 0,
								height: VALUES.Espacamento,
							},
							shadowOpacity: 0.3,
							shadowRadius: VALUES.Espacamento,
						}}>
						<Text
							style={{
								fontFamily: VALUES.Fontes.negrito,
								color: VALUES.Tema.constrastePrimario,
								fontSize: VALUES.TamanhoFonte.large,
								textAlign: "center",
							}}>
							Login
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => navigation.navigate("Registro")}
						style={{
							paddingVertical: VALUES.Espacamento * 1.5,
							paddingHorizontal: VALUES.Espacamento * 2,
							width: "48%",
							borderRadius: VALUES.Espacamento,
						}}>
						<Text
							style={{
								fontFamily: VALUES.Fontes.negrito,
								color: VALUES.Tema.corDoTexto,
								fontSize: VALUES.TamanhoFonte.large,
								textAlign: "center",
							}}>
							Register
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Inicio;
