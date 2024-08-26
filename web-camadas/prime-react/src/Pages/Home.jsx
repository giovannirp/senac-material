import Banner from "../Components/Banner";
import Card from "../Components/Card";

export default function Home() {
  return (
    <div>
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
  )
}
