import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

import InputTexto from "../components/InputTexto";

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RoutesType } from "@/rotas";

import VALUES from "@/VALUES";
import Botao from "@/components/Botao";
import validateEmail from "@/utils/validateEmail";
import verificarEmail from "@/cadastros/verificarEmail";
import verificarSenha from "@/cadastros/verificarSenha";

type Props = NativeStackScreenProps<RoutesType, "Login">;

const Login: React.FC<Props> = ({ navigation }) => {
	const [emailValido, setEmailValido] = useState(true);
	const [emailMsg, setEmailMsg] = useState("");
	const [senhaCorreta, setSenhaCorreta] = useState(true);

	const [emailValue, setEmailValue] = useState("");
	const [passwordValue, setPasswordValue] = useState("");

	function resetStates() {
		setEmailValido(true);
		setEmailMsg("");
		setSenhaCorreta(true);
		setEmailValue("");
		setPasswordValue("");
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
							marginVertical: VALUES.Espacamento * 3,
						}}>
						Login
					</Text>
					<Text
						style={{
							fontFamily: VALUES.Fontes.seminegrito,
							fontSize: VALUES.TamanhoFonte.large,
							maxWidth: "75%",
							textAlign: "center",
						}}>
						Bem vindo de volta, sentimos sua falta!
					</Text>
				</View>
				<View
					style={{
						marginVertical: VALUES.Espacamento * 3,
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
							placeholder: "Senha",
							errorMsg: senhaCorreta,
							secureTextEntry: true,
							autoComplete: "current-password",
							autoCapitalize: "none",
						}}
					/>
					{senhaCorreta ? (
						<></>
					) : (
						<Text
							style={{
								fontFamily: VALUES.Fontes.regular,
								fontSize: VALUES.TamanhoFonte.small,
								maxWidth: "75%",
								color: VALUES.Tema.erro,
							}}>
							Senha incorreta
						</Text>
					)}
				</View>

				<View>
					<Text
						style={{
							fontFamily: VALUES.Fontes.seminegrito,
							fontSize: VALUES.TamanhoFonte.small,
							color: VALUES.Tema.corPrimaria,
							alignSelf: "flex-end",
						}}>
						Esqueceu sua senha ?
					</Text>
				</View>

				<Botao
					onPress={async () => {
						setEmailValido(true);
						setSenhaCorreta(true);

						if (!validateEmail(emailValue)) {
							setEmailValido(false);
							setEmailMsg("Email inválido");
							return;
						}

						if (!(await verificarEmail(emailValue))) {
							setEmailValido(false);
							setEmailMsg("Email não encontrado");
							return;
						}

						if (
							!(await verificarSenha(emailValue, passwordValue))
						) {
							setSenhaCorreta(false);
							return;
						}

						resetStates();
						navigation.navigate("Entrar");
					}}
					buttonStyle={{
						padding: VALUES.Espacamento * 2,
						backgroundColor: VALUES.Tema.corPrimaria,
						marginVertical: VALUES.Espacamento * 3,
						borderRadius: VALUES.Espacamento,
						shadowColor: VALUES.Tema.corPrimaria,
						shadowOffset: {
							width: 0,
							height: VALUES.Espacamento,
						},
						shadowOpacity: 0.3,
						shadowRadius: VALUES.Espacamento,
					}}
					textStyle={{
						fontFamily: VALUES.Fontes.negrito,
						color: VALUES.Tema.constrastePrimario,
						textAlign: "center",
						fontSize: VALUES.TamanhoFonte.large,
					}}
					label="Entrar"
				/>

				<TouchableOpacity
					onPress={() => {
						resetStates();
						navigation.navigate("Registrar");
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
						Criar uma nova conta
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

					<View
						style={{
							marginTop: VALUES.Espacamento,
							flexDirection: "row",
							justifyContent: "center",
						}}>
						<TouchableOpacity
							style={{
								padding: VALUES.Espacamento,
								backgroundColor: VALUES.Tema.cinza,
								borderRadius: VALUES.Espacamento / 2,
								marginHorizontal: VALUES.Espacamento,
							}}>
							<Ionicons
								name="logo-google"
								color={VALUES.Tema.corDoTexto}
								size={VALUES.Espacamento * 2}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								padding: VALUES.Espacamento,
								backgroundColor: VALUES.Tema.cinza,
								borderRadius: VALUES.Espacamento / 2,
								marginHorizontal: VALUES.Espacamento,
							}}>
							<Ionicons
								name="logo-apple"
								color={VALUES.Tema.corDoTexto}
								size={VALUES.Espacamento * 2}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							style={{
								padding: VALUES.Espacamento,
								backgroundColor: VALUES.Tema.cinza,
								borderRadius: VALUES.Espacamento / 2,
								marginHorizontal: VALUES.Espacamento,
							}}>
							<Ionicons
								name="logo-facebook"
								color={VALUES.Tema.corDoTexto}
								size={VALUES.Espacamento * 2}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Login;
