import "./ImgCard.css"

// Importe a imagem diretamente
import img1 from '../assets/img/img-card.jpg';

const ImageCard = (props) => {
  return (
    <div className="image-card">
      <img src={img1} alt={props.caption || 'Imagem'} className="image-card-img" />
      <p className="image-card-caption">{props.caption}</p>
    </div>
  );
}

export default ImageCard;