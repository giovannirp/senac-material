import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Card from "./Components/Card";
import Header from "./Components/Header";
import ImageCard from "./Components/ImgCard";
import "./app.css";

function App() {
  const handleClick = () => {
    alert('Botão clicado!');
  };
  return (
    <>
      <div className="container">
        <Header title="Meu site" />
        <Card />
        <Banner>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>
        
        <Button text="Clique Aqui" onClick={handleClick} />

        <ImageCard  />


        <br />
      </div>
    </>
  );
}

export default App;
