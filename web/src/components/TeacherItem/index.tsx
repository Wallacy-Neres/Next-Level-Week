import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/58611826?s=460&v=4" alt="" />
        <div>
          <strong>Wallacy Neres</strong>
          <span>História</span>
        </div>
      </header>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quia deleniti, est hic qui tempora incidunt minima earum
        rerum voluptates? Et nisi provident praesentium doloribus,
        magnam consequuntur quod omnis aperiam reprehenderit!
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>

  );
}

export default TeacherItem;