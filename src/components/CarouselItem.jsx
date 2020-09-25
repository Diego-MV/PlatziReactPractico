import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setFavorite, deleteFavorite} from '../actions'
import '../assets/styles/components/CarouselItem.scss'
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/remove-icon.png';

const CarouselItem = (props) => {

  const {id, cover,title,year,contentRating, duration, categoria} = props;

  const handleSetFavorite = () => {
      props.setFavorite({
        id,cover,title,year,contentRating, duration
      })

  };

  const handleDeleteFavorite = () => {
    props.deleteFavorite({
      id,cover,title,year,contentRating, duration
    })
  };

  return(
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          
          <Link to={`/player/${id}`}>
            <img 
            className="carousel-item__details--img" 
            src={playIcon} 
            alt="Play Icon"
            /> 
          </Link>

          { //Solo muestra el boton añadir si la categoria no es de Mi Lista
            categoria == 'mylist' 
            ? (
              <img className="carousel-item__details--img" 
              src={removeIcon} 
              alt="Remove Icon"
              onClick={handleDeleteFavorite}/> 
            )
            : (
              <img className="carousel-item__details--img" 
              src={plusIcon} 
              alt="Plus Icon"
              onClick={handleSetFavorite}/>
            )
          }
          
          
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
    
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
}


export default connect(null, mapDispatchToProps)(CarouselItem);