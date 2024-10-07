const CORES = {
	branco: "#fff",
	preto: "#000",
	escuro: "#626262",
	azul: "#1F41BB",
	cinza: "#ECECEC",
	azulClaro: "#f1f4ff",
};

const VALUES = {
	Espacamento: 10,
	TamanhoFonte: {
		small: 14,
		medium: 16,
		large: 20,
		xLarge: 30,
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
	},
    Fontes: {
        "regular": "poppins-regular",
        "negrito": "poppins-bold",
        "seminegrito": "poppins-semiBold",
    }
};

export default VALUES;
