
import "./card.css";

const Card = () => {
  const cardData = [
    {
      title: "Car 1",
      textCard: "Este é meu primeiro Card",
      link: "#"
    },
    {
      title: "Car 2",
      textCard: "Este é meu segundo Card",
      link: "#"
    },
    {
      title: "Car 3",
      textCard: "Este é meu terceiro Card",
      link: "#"
    },
  ];
  return (
    <div className="card-container">
      {cardData.map((card, index) => {
        console.log(index)
        return (
          <div className="card" key={index}>
            <h2>{card.title}</h2>
            <p>{card.textCard}</p>
            <a href={card.link}>Saiba mais</a>
          </div>
        )
      })}


    </div>
  )
}

export default Card;