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
    });
   




  return (
    <div className="App">
      <header className="App-header">

        <h3>Click Up</h3>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#cursos">Cursos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

      </header>

      <section className="homeClass" id="home">


      </section>

      <section className="sobreClass" id="sobre">
        <h2 data-anime="left">Curso de Idiomas</h2>
      </section>

      <section className="cursosClass" id="cursos">
        <h2 data-anime="right">Curso de Idiomas</h2>
      </section>

      <section className="contatoClass" id="contato">
        <h2 data-anime="left">Curso de Idiomas</h2>
      </section>

      <footer>
        
      </footer>

    </div>

  );
}

export default App;
