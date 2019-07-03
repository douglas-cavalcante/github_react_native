<h1>Buscador gitHub </h1>

<p>
Esse projeto tem como objetivo buscar os repositórios e organizações do usuário digitado na tela de Welcome.
O fluxo do app é o seguinte: o usuário digita o seu usuário e
salva na memória do dispositivo. Na tela de repositórios é listado todos os repositórios públicos do usuário e também informações importantes de cada um. Do mesmo modo funciona a tela de
Organizações acessível pelo menu inferior.
</p>

<h2>Organização do código </h2>

<p>
Os arquivos de configurações do próprio react-native estão na raiz do projeto. O código desenvolvido está na pasta src.
A pasta components armazena os componentes reutilizáveis da aplicação. Na parte config, encontramos arquivos de configuração de ferramentas, como por exemplo o Reactotron(debug).
Na parte pages, encontramos arquivos relacionadas as páginas do aplicativo. Cada página tem uma estrutura com um arquivo index.js e styles.js. Na parte styles, temos arquivos globais
da aplicação, como cores, métricas e dentre outros.
</p>


Instruções:
<ul>
<li>Para simular o app, é necessário ter um ambiente de desenvolvimento react-native bem configurado. Segue o melhor tutorial para essa configuração https://docs.rocketseat.dev/ambiente-react-native/introducao </li>
<li> Após ter configurado, execute um yarn install e após a instalação dos pacotes, execute <b> react-native run-android </b> na pasta do projeto e acesse o app no emulador. </li>
 </ul>
