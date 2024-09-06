import Banner from "./Components/Banner";
import Button from "./Components/Button";
import Card from "./Components/Card/Card";
import Header from "./Components/Header";
import ImageCard from "./Components/ImgCard/ImgCard";
import "./app.css";
import NewCard from "./Components/NewCard";
import Aumentar from "./Components/Aumentar";

function App() {
  const handleClick = () => {
    alert('Botão clicado!');
  };
  return (
    <>
      <div className="container">
        <Header title="Meu site" />
        <Card />
        <NewCard>
          <h1>Olá teste</h1>
          <h2>Novo teste</h2>
        </NewCard>
        <Banner>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Aqui você encontra as melhores ofertas!</p>
        </Banner>
        
        <Button text="Clique Aqui" onClick={handleClick} />

        <ImageCard caption="Uma imagem interessante" />

        <Aumentar />
        
        <br />
      </div>
    </>
  );
}

export default App;
