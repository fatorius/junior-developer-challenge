import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutesType } from "@/rotas";
import Inicio from "@/telas/Inicio";
import Login from "@/telas/Login";
import Registro from "@/telas/Registro";
import fonts from "@/fonts";
import Logado from "@/telas/Logado";

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
						name="Registrar"
						component={Registro}
					/>
					<Stack.Screen
						name="Entrar"
						component={Logado}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</SafeAreaProvider>
	);
}

export default App;
