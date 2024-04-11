function Perfil(props) {

  const tituloPagina = <h1>Olá,<br />meu nome é<br />{props.meuNome}!</h1>;
  const minhaFoto = <img src={props.arquivoFoto} className="inline_img"></img>;

  const perfilContent = (
    <div>
      <div className="nome">
        {tituloPagina}
      </div>
      <div>
        {minhaFoto}
      </div>
    </div>);

  return perfilContent;
}

function Bio() {
  const minibio = <div className="minibio">
    Ana Oliveira, programadora,
    há 20 anos vem realizando o estudo em  tencologia para aplicativos
    de fácil utilizacão e linguagem acessível.<br /><br />
    Durante toda sua jornada sempre fez questão de compartilhar seus 
    aprendizados fazendo com que outras pessoas também pudessem contribuir 
    com suas descobertas.
  </div>;
  return minibio;
}

function LinkFacebook() {
  return (
    <div className="Facebook">
      <a href='https://www.facebook.com/KarolynaSOliveira' target='_blank'>Linkedin</a>
    </div>);
}

function Content() {
  return (
    <div>
      <Perfil meuNome="Ana Oliveira" arquivoFoto='cc.jpeg' />
      <br />
      <Bio />
      <br /><br />
      <LinkLinKedin />
    </div>);
}


ReactDOM.render(
  <Content />,
  document.getElementById('root')
);
