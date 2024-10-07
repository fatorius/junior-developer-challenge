import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RoutesType {}
	}
}

export type RoutesType = {
	Inicio: undefined;
	Login: undefined;
	Registrar: undefined;
	Entrar: undefined;
};

export type RootStackScreenProps<Screen extends keyof RoutesType> =
	NativeStackScreenProps<RoutesType, Screen>;
