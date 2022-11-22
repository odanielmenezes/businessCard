import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faGlobe,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Style from "./style";

export function Redes() {
  return (
    <Style>
      <div className="Redes">
        <div className="MainContent">
          <div className="Redes__Items">
            <a href="https://www.instagram.com/sabordomel.buffet" target="_blannk">
              <div className="IconItem">
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <small>Instagram</small>
            </a>
          </div>
          <div className="Redes__Items">
            <a href="https://www.smgastronomia.com" target="_blank" rel="noreferrer">
              <div className="IconItem">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <small>Site Oficial</small>
            </a>
          </div>
          <div className="Redes__Items">
            <a
              href="https://smgastronomia.com/localizacao"
              target="_blank"
              rel="noreferrer"
            >
              <div className="IconItem">
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <small>Localização</small>
            </a>
          </div>
          <div className="Redes__Items">
            <a href="https://smgastronomia.com/contate-nos" target="_blank" rel="noreferrer">
              <div className="IconItem">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <small>Orçamento</small>
            </a>
          </div>
        </div>
        <div className="BackgroundImageRedes"></div>
      </div>
    </Style>
  );
}
