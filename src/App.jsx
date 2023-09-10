import React from "react";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import Modal, { ModalBody, ModalHeader } from "./components/Modal";

import banner from "./images/banner.jpg";
import card1 from "./images/card1.jpg";
import card2 from "./images/card2.jpg";
import card3 from "./images/card3.jpg";
import card4 from "./images/card4.jpg";

import "./styles/global.css";
// npm install
// npm run start
const requisicao = [
  {
    id: 1,
    titulo: "Missão impossivel 2",
    imagem: card1,
  },
  {
    id: 2,
    titulo: "Missão impossivel 3",
    imagem: card2,
  },
  {
    id: 3,
    titulo: "Missão impossivel 5",
    imagem: card3,
  },
  {
    id: 4,
    titulo: "Missão impossivel 7",
    imagem: card4,
  },
];

// https://github.com/profchines
function App() {
  return (
    <>
      <Header />
      <img width="100%" src={banner} />
      <h1
        style={{
          margin: 15,
          textAlign: "center",
        }}
      >
        Filmes
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {requisicao.map((filme) => {
          return (
            <Card key={filme.id} imagem={filme.imagem} titulo={filme.titulo} />
          );
        })}
      </div>
      <Modal>
        <ModalHeader>
          <h2>Chaves</h2>
        </ModalHeader>
        <ModalBody>
          <p
            style={{
              fontSize: "0.8rem",
              marginBottom: 10,
            }}
          >
            04/09/2023
          </p>
          <div
            style={{
              display: "flex",
              marginBottom: 10,
            }}
          >
            <p
              style={{
                fontSize: "0.8rem",
                color: "#b3b3b3",
              }}
            >
              Direção:
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                marginLeft: 5,
              }}
            >
              Kiko
            </p>
          </div>
        </ModalBody>
      </Modal>
      <Footer />
    </>
  );
}

export default App;
