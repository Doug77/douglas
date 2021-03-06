import React, { useEffect } from 'react';
import './AboutMe.css';
import './AboutMeResponse.css';
import Aos from 'aos';
import "aos/dist/aos.css";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="div-fade">
      <div className="about-content" name="sobre" data-aos="fade-up">
        <div className="about-me-name about-div">
          <p className="about-my-name about">Sobre mim...</p>
          <div>
            <hr className="about-my-name" />
          </div>
        </div>
        <div className="about-div">
          <p className="description-me">
            Sou <b>Desenvolvedor Web<span className="front-end">Full-Stack</span></b> e estou em busca de aperfeiçoar meus conhecimentos e me esforçando para ser um profissional melhor.
          </p>
          <p className="description-me">
            <b>
              Me dedico sempre a evoluir meus conhecimentos e praticar o aprendizado.
            </b>
          </p>
        </div>
        <div className="about-div">
          <img

            src="https://avatars.githubusercontent.com/u/83235564?v=4"
            alt="picture-doug"
            className="my-photo"
          />
        </div>
      </div>
    </div>
  );
}
