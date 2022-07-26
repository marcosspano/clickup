import './App.css';
import React, { useEffect } from 'react';

function App() {

    const target = document.querySelectorAll('[data-anime]');
    const animationClass = 'animate';

    function animeScroll() {
      const windowTop = window.pageYOffset + ((window.innerHeight * 3)/4);
      target.forEach(function (element) {
        if ((windowTop) > element.offsetTop) {
          element.classList.add(animationClass);

        } else {
          element.classList.remove(animationClass);

        }
      })
    }

    useEffect(() => {
      if (target.length) {
        window.addEventListener('scroll', function () {
          animeScroll();
        });
      }

      document.querySelector(".carrossel1")
      .addEventListener("wheel", event => {
        if(event.deltaY > 0) {
          event.target.scrollBy(85, 0)
        } else {
          event.target.scrollBy(-85, 0)
        }
      })

      document.querySelector(".carrossel2")
      .addEventListener("wheel", event => {
        if(event.deltaY > 0) {
          event.target.scrollBy(85, 0)
        } else {
          event.target.scrollBy(-85, 0)
        }
      })
    });
   




  return (
    <div className="App">
      <header className="App-header">

        <img src="./imgs/logo.png" alt="" />

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

      </header>

      <section className="homeClass" id="home">

          
        <div>
          <img src="./imgs/logo-e-mockup.png" alt="" />
        </div>
           

      </section>

      <section className="sobreClass" id="sobre">
        <div>
          <img src="./imgs/socialmedia.png" alt="" />
          <div className='carrossel1'>
            <img src="./imgs/images/carrossel1__01.png" alt="" />
            <img src="./imgs/images/carrossel1__02.png" alt="" />
            <img src="./imgs/images/carrossel1__03.png" alt="" />
          </div>
        </div>
        
      </section>

      <section className="cursosClass" id="cursos">
        <div>
         <img src="./imgs/cursos.png" alt="" />
            <div className='carrossel2'>
              <img src="./imgs/images/mapa_01.png" alt="" />
              <img src="./imgs/images/mapa_02.png" alt="" />
            </div>
          </div>
      </section>

      <section className="contatoClass" id="contato">
        <p>Entre em contato pelo email: contato@clickup.com</p>
      </section>

      <footer>

        <div>
        <ul>
          <li>Quem Somos</li>
          <li>Unidades</li>
          <li>Seja um Franqueado</li>
          <li>Trabalhe Conosco</li>
          <li>Blog</li>
          <li>Convênios</li>
          <li>Dúvidas Frequentes</li>
          <li>Contato</li>
          <li>Termo de privacidade</li>
        </ul>

        <ul>
          <li>Inglês</li>
          <li>Espanhol</li>
          <li>Francês</li>
          <li>Alemão</li>
          <li>Italiano</li>
          <li>Cursos Personalizados</li>
          <li>Teste de Classificação</li>
          <li>Certificações</li>
          <li>Intercâmbio e Viagens</li>
        </ul>

        <ul>
          <li>Alunos</li>
          <li>Franqueados</li>
        </ul>

        <ul>
          <li>Estr. do Portela, 61 - Madureira.</li>
          <li>Rio de Janeiro - RJ, CEP 21351-050</li>
        </ul>

        </div>

        <p>Criado por <strong>Marcos Spano</strong> e <strong>Pedro Abreu</strong> | <a href='./psd/projeto.zip'>Arquivos</a></p>
        
        
      </footer>

    </div>

  );
}

export default App;
