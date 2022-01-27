import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardInteresses from './components/CardInteresses/CardInteresses'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4D03AQFNKyOafax08A/profile-displayphoto-shrink_800_800/0/1583845722756?e=1648684800&v=beta&t=_p6uBIc-kGjYaTVRCaLskSZYpaEBwG8P-72o3XWqtiY" 
          nome="Rommel" 
          descricao="Oi, eu sou o Rommel. Sou aluno da Labenu no curso de Desenvolvedor Web FullStack, adoro games de computador e trabalho com suporte de informatica na UNIFAP."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
        imagem="http://cdn.onlinewebfonts.com/svg/img_237869.png"
        title="Email"
        infor="rommel.santhiago@gmail.com"
        />
      </div>
      <div className="page-section-container">
        <CardPequeno 
        imagem="https://image.flaticon.com/icons/png/512/1239/1239525.png"
        title="Endereço"
        infor="Juazeiro do Norte - CE"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://icon-library.com/images/nasa-icon/nasa-icon-10.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Interesses profissionais</h2>
        <CardInteresses />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
