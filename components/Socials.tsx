import VALUES from "@/VALUES";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";

function Socials() {
	return (
		<View
			style={{
				marginTop: VALUES.Espacamento,
				flexDirection: "row",
				justifyContent: "center",
			}}>
			<TouchableOpacity
				style={{
					padding: VALUES.Espacamento,
					backgroundColor: VALUES.Tema.cinza,
					borderRadius: VALUES.Espacamento / 2,
					marginHorizontal: VALUES.Espacamento,
				}}>
				<Ionicons
					name="logo-google"
					color={VALUES.Tema.corDoTexto}
					size={VALUES.Espacamento * 2}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					padding: VALUES.Espacamento,
					backgroundColor: VALUES.Tema.cinza,
					borderRadius: VALUES.Espacamento / 2,
					marginHorizontal: VALUES.Espacamento,
				}}>
				<Ionicons
					name="logo-apple"
					color={VALUES.Tema.corDoTexto}
					size={VALUES.Espacamento * 2}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					padding: VALUES.Espacamento,
					backgroundColor: VALUES.Tema.cinza,
					borderRadius: VALUES.Espacamento / 2,
					marginHorizontal: VALUES.Espacamento,
				}}>
				<Ionicons
					name="logo-facebook"
					color={VALUES.Tema.corDoTexto}
					size={VALUES.Espacamento * 2}
				/>
			</TouchableOpacity>
		</View>
	);
}

export default Socials;
