import InputTexto from "@/components/InputTexto";
import { RoutesType } from "@/rotas";
import VALUES from "@/VALUES";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import Botao from "@/components/Botao";
import validateEmail from "@/utils/validateEmail";
import adicionarConta from "@/cadastros/adicionarConta";
import verificarEmail from "@/cadastros/verificarEmail";
import Socials from "@/components/Socials";

type Props = NativeStackScreenProps<RoutesType, "Registrar">;

const Registro: React.FC<Props> = ({ navigation }) => {
	const [emailMsg, setEmailMsg] = useState("");

	const [emailValido, setEmailValido] = useState(true);
	const [passwordMatch, setPasswordMatch] = useState(true);
	const [passwordLength, setPasswordLength] = useState(true);

	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");
	const [passwordConfirmValue, setPasswordConfirmValue] = useState("");

	function resetStates() {
		setEmailMsg("");

		setEmailValido(true);
		setPasswordMatch(true);
		setPasswordLength(true);

		setEmailValue("");
		setPasswordValue("");
		setPasswordConfirmValue("");
	}

	return (
		<SafeAreaView>
			<View
				style={{
					padding: VALUES.Espacamento * 2,
				}}>
				<View
					style={{
						alignItems: "center",
					}}>
					<Text
						style={{
							fontSize: VALUES.TamanhoFonte.xLarge,
							color: VALUES.Tema.corPrimaria,
							fontFamily: VALUES.Fontes.negrito,
							marginVertical: VALUES.Espacamento * 2,
						}}>
						Cadastre-se
					</Text>
					<Text
						style={{
							fontFamily: VALUES.Fontes.regular,
							fontSize: VALUES.TamanhoFonte.small,
							maxWidth: "80%",
							textAlign: "center",
						}}>
						Crie uma conta para explorar todas as vagas da nossa
						plataforma
					</Text>
				</View>
				<View
					style={{
						marginVertical: VALUES.Espacamento * 2,
					}}>
					<InputTexto
						value={emailValue}
						onChange={(value: string) => {
							setEmailValue(value);
						}}
						otherProps={{
							placeholder: "Email",
							errorMsg: emailValido,
							autoComplete: "email",
							autoCapitalize: "none",
						}}
					/>
					{emailValido ? (
						<></>
					) : (
						<Text
							style={{
								fontFamily: VALUES.Fontes.regular,
								fontSize: VALUES.TamanhoFonte.small,
								maxWidth: "75%",
								color: VALUES.Tema.erro,
							}}>
							{emailMsg}
						</Text>
					)}
					<InputTexto
						value={passwordValue}
						onChange={(value: string) => {
							setPasswordValue(value);
						}}
						otherProps={{
							placeholder: "Senha (Mínimo: 8 caracteres)",
							errorMsg: passwordLength,
							autoComplete: "new-password",
							autoCapitalize: "none",
							secureTextEntry: true,
						}}
					/>
					{passwordLength ? (
						<></>
					) : (
						<Text
							style={{
								fontFamily: VALUES.Fontes.regular,
								fontSize: VALUES.TamanhoFonte.small,
								maxWidth: "75%",
								color: VALUES.Tema.erro,
							}}>
							A senha deve ter no mínimo 8 caracteres
						</Text>
					)}
					<InputTexto
						value={passwordConfirmValue}
						onChange={(value: string) => {
							setPasswordConfirmValue(value);
						}}
						otherProps={{
							placeholder: "Confirme a senha",
							errorMsg: passwordMatch,
							autoComplete: "new-password",
							autoCapitalize: "none",
							secureTextEntry: true,
						}}
					/>
					{passwordMatch ? (
						<></>
					) : (
						<Text
							style={{
								fontFamily: VALUES.Fontes.regular,
								fontSize: VALUES.TamanhoFonte.small,
								maxWidth: "75%",
								color: VALUES.Tema.erro,
							}}>
							As senhas não conferem
						</Text>
					)}
				</View>

				<Botao
					label="Cadastrar"
					textStyle={{
						fontFamily: VALUES.Fontes.negrito,
						color: VALUES.Tema.corSecundaria,
						textAlign: "center",
						fontSize: VALUES.TamanhoFonte.large,
					}}
					buttonStyle={{
						padding: VALUES.Espacamento * 1.5,
						backgroundColor: VALUES.Tema.corPrimaria,
						marginVertical: VALUES.Espacamento * 1.5,
						borderRadius: VALUES.Espacamento,
						shadowColor: VALUES.Tema.corPrimaria,
						shadowOffset: {
							width: 0,
							height: VALUES.Espacamento,
						},
						shadowOpacity: 0.3,
						shadowRadius: VALUES.Espacamento,
					}}
					onPress={async () => {
						setEmailValido(true);
						setPasswordLength(true);
						setPasswordMatch(true);

						let dadosInvalidos = false;

						if (!validateEmail(emailValue)) {
							setEmailValido(false);
							setEmailMsg("Email inválido");
							dadosInvalidos = true;
						}

						if (await verificarEmail(emailValue)) {
							setEmailValido(false);
							setEmailMsg("Email já cadastrado");
							dadosInvalidos = true;
						}

						if (passwordValue.length < 8) {
							setPasswordLength(false);
							dadosInvalidos = true;
						}

						if (passwordValue !== passwordConfirmValue) {
							setPasswordMatch(false);
							dadosInvalidos = true;
						}

						if (dadosInvalidos) {
							return;
						}

						await adicionarConta(emailValue, passwordValue);

						resetStates();
						navigation.navigate("Login");
					}}
				/>

				<TouchableOpacity
					onPress={() => {
						resetStates();
						navigation.navigate("Login");
					}}
					style={{
						padding: VALUES.Espacamento,
					}}>
					<Text
						style={{
							fontFamily: VALUES.Fontes.seminegrito,
							color: VALUES.Tema.corDoTexto,
							textAlign: "center",
							fontSize: VALUES.TamanhoFonte.small,
						}}>
						Já tenho uma conta
					</Text>
				</TouchableOpacity>

				<View
					style={{
						marginVertical: VALUES.Espacamento * 3,
					}}>
					<Text
						style={{
							fontFamily: VALUES.Fontes.seminegrito,
							color: VALUES.Tema.corPrimaria,
							textAlign: "center",
							fontSize: VALUES.TamanhoFonte.small,
						}}>
						Ou continue com
					</Text>

					<Socials />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Registro;
