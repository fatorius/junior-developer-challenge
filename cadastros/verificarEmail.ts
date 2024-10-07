import AsyncStorage from "@react-native-async-storage/async-storage";

async function verificarEmail(email: string) {
	let emailPresente = false;
	try {
		const contas = await AsyncStorage.getItem("contas");
		console.log(contas);
		if (contas !== null) {
			const contasObj = JSON.parse(contas);

			emailPresente = email in contasObj;
		}
	} catch (e) {
		console.log(e);
	}

	return emailPresente;
}

export default verificarEmail;
