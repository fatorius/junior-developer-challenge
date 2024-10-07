import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RoutesType } from "./types";
import Inicio from "@/screens/Inicio";
import Login from "@/screens/Login";
import Registro from "@/screens/Registro";

const Stack = createNativeStackNavigator<RoutesType>();

function App() {
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
