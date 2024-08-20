import Banner from "./Components/Banner"
import Card from "./Components/Card"
import "./app.css";

function App() {

  return (
    <>
      <div>
        <Banner
          titulo="Banner Principal New"
        />
        <h1 className="text-principal">Seja bem vindo!</h1>
        <Banner
          titulo="Novo novo Giovanni"
          subTitulo="Lorem Ipsum New novo"
        />

        <Card />

        <Banner
          titulo="Banner Principal New"
          subTitulo="Lorem Ipsum New"
          textoComentario="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        />
      </div>
    </>
  )
}

export default App
