# Junior Developer Challenge - Hugo Souza

Esta é a minha submissão para o desafio [GitHub - Noah-Entregas/junior-developer-challenge](https://github.com/Noah-Entregas/junior-developer-challenge).

## Executando o aplicativo localmente

1. Instale as dependências
   
   ```bash
   npm install
   ```

2. Para executar o aplicativo em um emulador local, você pode usar:
   
   ```bash
    npm run android # Executa em emulador Android
    npm run ios # Executa em emulador iOS (Disponível apenas em MacOS)
    npm run web # Executa o aplicativo no navegador
   ```
   
   Para instalar os emuladores, siga os passos elencados nesses guias para [iOS](https://developer.apple.com/documentation/safari-developer-tools/installing-xcode-and-simulators) e [Android](https://developer.android.com/studio/emulator_archive?hl=pt-br).

3. Para executar em um dispositivo físico, utilize:
   
   ```bash
   npm start
   ```
   
   Esta opção irá gerar um QR Code que você pode escanear através do aplicativo `Expo Go` para Android ou iOS.

## Passos extras para contribuintes

Caso você esteja clonando este repositório com o objetivo de contribuir para o projeto, você precisará executar `npm run prepare` para poder enviar commits para o repositório.

Este comando configura o `husky`, responsável por testar o código antes de cada commit para garantir que o código no repositório esteja o mais correto possível.

## Entry point

O entry point do aplicativo mobile é o arquivo `app/index.tsx`.
Este arquivo anexa os componentes de todas as telas do aplicativo em um `NavigationContainer`, permitindo com que o usuário navegue entre as telas dentro do aplicativo.

## Telas

Os componentes para todas as telas estão dentro da pasta `telas/`.

### Inicio.tsx

A tela inicial do aplicativo. Contém dois botões que levam para as telas de cadastro ou login.

### Login.tsx

A tela de login. Contém um formulário para o usuário digitar o seu email e senha. Essa tela possui uma função temporária de autenticação do login do usuário, utilizando um armazenamento interno das contas. Essa função deverá ser substituída por uma função de autenticação apropriada.

### Logado.tsx

Essa tela é aberta quando o usuário digita seu email e senha corretamentes. Deverá ser substituída pela Home do aplicativo para usuários logados.

### Registro.tsx

A tela de registro contém um formulário para a criação de uma conta para o usuário. Assim como a tela de login, esta tela utiliza uma função temporária para registro de contas no armazenamento interno. Essa função deverá ser substituída por uma função de registro apropriada.

## Componentes

Alguns componentes foram criados para serem reutilizados em diversas telas, todos eles estão localizados na pasta `components/`

### Botao.tsx

Um componente de botão, recebe as seguintes props:

* onPress (função): Função executada ao pressionar o botão.
* label (string): Texto (rótulo) do botão.
* buttonStyle (StyleProp): Configurações de estilo do botão.
* textStyle (StyleProp): Configurações de estilo do texto do botão.

#### Exemplo de uso:

```jsx
function App(){
    return (
      <Botao
          onPress={() => {
              console.log("O botão foi pressionado");
          }}
          buttonStyle={{
              padding: 18
              backgroundColor: "#FFe386",
              marginVertical: 27,
              borderRadius: 9,
              shadowColor: "#000",
              shadowOffset: {
                  width: 0,
                  height: 9,
              },
              shadowOpacity: 0.3,
              shadowRadius: 9,
          }}
          textStyle={{
              color: "#fff",
              textAlign: "center",
              fontSize: 26,
          }}
          label="Aperte-me"
      />
    );
}
```

### InputTexto.tsx

Um componente para entrada de texto. É um componente `TextInput` do ReactNative com algumas modificações. Recebe os seguintes props:

* value (string): Varíavel de state (`useState`) para armazenar o texto atual do campo de texto.
* onChange (função): Função a ser chamada toda vez que o valor do campo de texto é alterado. Recebe como parâmetro o novo valor do texto e deve alterar o state do `value` (Veja o exemplo).
* otherProps (objeto): Outras props do componente `TextInput` podem ser passadas por este objeto. Veja a [documentação do TextInput](https://reactnative.dev/docs/textinput) para mais detalhes.

#### Exemplo de uso:

```jsx
function App(){
    const [emailValue, setEmail] = React.useState("");

    return (
      <InputTexto
        value={emailValue}
        onChange={(value: string) => {
            setEmail(value);
        }}
        otherProps={{
            placeholder: "Digite seu email",
            errorMsg: senhaCorreta,
            autoComplete: "email",
            autoCapitalize: "none",
        }}
        />
    );
}
```

### Socials.jsx

Componente simples que retorna três botões referentes às formas alternativas de login através das redes sociais.

Este componente não possui props.

## Funções úteis

Algumas funções são utilizadas dentro da lógica de outros componentes. Elas estão presentes dentro da pasta `utils/`.

### validateEmail(email: string) => boolean

Verifica que o email é valido com base no formato da string.

```javascript
validateEmail("teste@email.com") // true
validateEmail("teste@123") // false
```

## Armazenamento de cadastros

Por se tratar de uma demonstração, este aplicativo não se conecta a algum backend ou banco de dados, portanto, 
os dados das contas salvas são armazenados internamente. As funções que lidam com esse armazenamento estão presentes
na pasta `cadastros/`.

### adicionarConta(email: string, senha: string)
Adiciona uma nova conta no armazenamento do aplicativo.

### verificarEmail(email: string) => boolean
Retorna `true` caso o email em questão esteja cadastrado na base de dados, e `false` caso contrário.

### verificarSenha(email: string, senha: string) => boolean
Retorna `true` caso o email esteja cadastrado e a senha esteja correta. Retorna `false` caso contrário.

## Outros comandos

```bash
npm run test
```

Executa os testes unitários através do `jest`.



```bash
npm run lint
```

Executa o `eslint` no repositório.

```bash
npm run format
```

Formata o estilo de código utilizando o `prettier`.
