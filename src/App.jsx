import "./App.css";
import Header from "./components/Header";

import img from "./assets/foto.webp";
import img1 from "./assets/img.webp";

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <div className="main">
          <div className="intro">
            <div className="student">
              <img src={img} alt="foto alunos" />
              <p>Mais de 3.200 alunos e alunas</p>
            </div>
            <div className="text">
              <h1>
                Aprenda programação do zero e conquiste sua{" "}
                <span>primeira vaga</span>
              </h1>
              <p>
                O Explorer é um programa completo que reúne tudo o que você
                precisa para desenvolver suas habilidades técnicas e
                comportamentais, com acompanhamento de uma equipe qualificada da
                Rocketseat, para alcançar sua primeira vaga no mercado de
                programação
              </p>

              <div className="btn">
                <button>ACESSAR PRÉ-VENDA <i class="fa-solid fa-arrow-up"></i></button>
                <span> <i class="fa-solid fa-calendar-days"></i> Turma 11 - 27/03/2023</span>
              </div>

              <div className="check">
                <span><i class="fa-solid fa-check"></i> Parcele em até 24x no boleto</span>

                <span><i class="fa-solid fa-check"></i> 15 dias de garantia</span>
              </div>
            </div>
          </div>

          <div>
            <img src={img1} alt="foto professor" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
