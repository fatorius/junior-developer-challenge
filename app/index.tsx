import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutesType } from "@/types";
import Inicio from "@/telas/Inicio";
import Login from "@/telas/Login";
import Registro from "@/telas/Registro";
import fonts from "@/fonts";

const Stack = createNativeStackNavigator<RoutesType>();

function App() {
	const [fontesCarregadas] = useFonts(fonts);

	if (!fontesCarregadas) {
		return null;
	}

	return (
		<SafeAreaProvider>
			<NavigationContainer independent={true}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}>
					<Stack.Screen
						name="Inicio"
						component={Inicio}
					/>
					<Stack.Screen
						name="Login"
						component={Login}
					/>
					<Stack.Screen
						name="Registro"
						component={Registro}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
