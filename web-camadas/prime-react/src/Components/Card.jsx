import "./card.css";

const Card = () => {

  const cardData = [
    {
      title: "Card 1",
      description: "Este é o primeiro card",
      link: "#",
    },
    {
      title: "Card 2",
      description: "Este é o segundo card",
      link: "#",
    },
    {
      title: "Card 3",
      description: "Este é o terceiro card",
      link: "#",
    }
  ]

  return (
    <div className="card-container">
      {cardData.map((card) => (
        <>
          <div className="card">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <a href={card.link}>Veja mais</a>
          </div>
        </>
      ))}
    </div>
  )
}

export default Card;