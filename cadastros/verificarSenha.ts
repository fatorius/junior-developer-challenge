import AsyncStorage from "@react-native-async-storage/async-storage";

async function verificarSenha(email: string, senha: string) {
	try {
		const contas = await AsyncStorage.getItem("contas");
		if (contas !== null) {
			const contasObj = JSON.parse(contas);

			return contasObj[email] === senha;
		}
	} catch (e) {
		console.log(e);
	}
}

export default verificarSenha;
