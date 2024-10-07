import { responsiveScreenFontSize } from "react-native-responsive-dimensions";

const CORES = {
	branco: "#fff",
	preto: "#000",
	escuro: "#626262",
	azul: "#1F41BB",
	cinza: "#ECECEC",
	azulClaro: "#f1f4ff",
	vermelho: "#ff0000",
	vermelhoClaro: "#ffc2c2",
};

const VALUES = {
	Espacamento: 9,
	TamanhoFonte: {
		small: responsiveScreenFontSize(1.5),
		medium: responsiveScreenFontSize(2),
		large: responsiveScreenFontSize(2.25),
		xLarge: responsiveScreenFontSize(4.25),
		xxLarge: 35,
	},
	Tema: {
		corDoTextoEscuro: CORES.escuro,
		corDoTexto: CORES.preto,
		fundo: CORES.branco,
		corPrimaria: CORES.azul,
		constrastePrimario: CORES.branco,
		ativo: CORES.azul,
		borda: "#1f41bb",
		corSecundaria: CORES.azulClaro,
		cinza: CORES.cinza,
		erro: CORES.vermelho,
		fundoErro: CORES.vermelhoClaro,
	},
	Fontes: {
		regular: "poppins-regular",
		negrito: "poppins-bold",
		seminegrito: "poppins-semiBold",
	},
};

export default VALUES;
