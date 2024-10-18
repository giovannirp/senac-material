import Card from "./Components/Card";
import "./App.css"
import Header from "./Components/Header";
import img1 from "./assets/img/img-1.jpg";
import img2 from "./assets/img/img-2.jpg";


function App() {
  return (
    <>
      <div className="app">
      <Header title="Revisão de React" />

        <div className="cards-container">
          <Card
            title="Componentes em React"
            description="Entenda como funcionam os componentes e como passar props."
            imageUrl={img1}
          />
          <Card
            title="Props e Reutilização"
            description="Aprenda como reutilizar componentes com diferentes dados."
            imageUrl={img2}
          />
        </div>
      </div>
    </>
  );
}

export default App;
