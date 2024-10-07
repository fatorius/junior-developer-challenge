import AsyncStorage from "@react-native-async-storage/async-storage";

async function adicionarConta(email: string, senha: string) {
	try {
		const contas = await AsyncStorage.getItem("contas");
		let contasObj: {
			[key: string]: string;
		} = {};

		if (contas !== null) {
			contasObj = JSON.parse(contas);
		}

		contasObj[email] = senha;

		await AsyncStorage.setItem("contas", JSON.stringify(contasObj));
	} catch (e) {
		console.log(e);
	}
}

export default adicionarConta;
