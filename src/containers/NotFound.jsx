import React from 'react';
import '../assets/styles/NotFound.scss'
const NotFound = () => (
      <div className="hero">
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <h1>404</h1>
              <h2>Error!</h2>
              <h3>Pagina no encontada.</h3>
              <a href="/" className="btn-back">Volver</a>
            </div>
            <div className="col-sm-4">
              <div className="astro">
                  <img src="http://s3.amazonaws.com/chewiekie/img/astro02.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
);

export default NotFound;