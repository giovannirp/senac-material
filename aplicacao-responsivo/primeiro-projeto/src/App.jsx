import Banner from "./Components/Banner";
import Card from "./Components/Card";
import Header from "./Components/Header";
import ImageCard from "./Components/ImgCard";
import "./app.css";

function App() {
  return (
    <>
      <div className="container">
        <Header title="Meu site" />
        <Card />
        <Banner>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>

        <ImageCard caption="Uma imagem interessante" />

        <br />
      </div>
    </>
  );
}

export default App;
