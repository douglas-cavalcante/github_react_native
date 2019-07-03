<h1>Buscador gitHub </h1>

<p>
O presente projeto simula um buscador de repositórios. Ele tem como objetivo listar os repositórios e organizações do usuário digitado. O fluxo do app é o seguinte : Na tela de Welcome, o usuário digita o username, uma requisição é feita para saber se o usuário realmente existe no github. Caso o usuário exista, o username digitado no <TextInput /> é salvo na memória do dispositivo. Caso não exista, uma mensagem de erro é apresentada. De posse do username, a tela de repositórios realiza a listagem de repositórios e organizações. Os repositórios exibem informações como números de estrelas e dentre outras informações.
</p>

<h2>Organização do código </h2>

<p>
Os arquivos de configurações do próprio react-native estão na raiz do projeto. O código desenvolvido está na pasta src.
A pasta components armazena os componentes reutilizáveis da aplicação. Na parte config, encontramos arquivos de configuração de ferramentas, como por exemplo o Reactotron(debug).
Na parte pages, encontramos arquivos relacionadas as páginas do aplicativo. Cada página tem uma estrutura com um arquivo index.js e styles.js. Na parte styles, temos arquivos globais
da aplicação, como cores, métricas e dentre outros.
</p>

<hr>

Instruções de instalação do projeto:
<ul>
  <li>Para simular o app, é necessário ter um ambiente de desenvolvimento react-native bem configurado. Segue o melhor tutorial para essa configuração https://docs.rocketseat.dev/ambiente-react-native/introducao </li>
  <li> Após ter configurado, execute um <b>yarn install</b> e após a instalação dos pacotes, execute <b> react-native run-android </b> na pasta do projeto e acesse o app no emulador. </li>
</ul>

<hr>
<img src="assets/1.png" >
<img src="assets/2.png" >
