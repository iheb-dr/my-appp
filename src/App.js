import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Mon Portfolio</h1>
        <nav>
          <ul className="nav">
            <li><a href="#home">Accueil</a></li>
            <li><a href="#about">À propos</a></li>
            <li><a href="#projects">Projets</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="section">
        <h2>Bienvenue sur mon portfolio</h2>
        <p>Je suis un développeur web et un commentateur sportif</p>
      </section>

      <section id="about" className="section">
        <h2>À propos de moi</h2>
        <p>Je m'appelle iheb et je suis un développeur web et commentateur sportif </p>
      </section>

      <section id="projects" className="section">
        <h2>Mes Projets</h2>
        <ul className="projects">
          <li>
            <h3>Projet 1: Site Web</h3>
            <p>Un site web construit avec HTML, CSS et JavaScript.</p>
          </li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contactez-moi</h2>
        <form className="contact-form">
          <label>
            Nom:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="email" name="email" />
          </label>
          <label>
            Message:
            <textarea name="message"></textarea>
          </label>
          <button type="submit">Envoyer</button>
        </form>
      </section>

      <footer className="footer">
        <p>© 2024 Mon Portfolio. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default App;
