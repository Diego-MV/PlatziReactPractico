import React,{useState} from 'react';
import '../assets/styles/Register.scss'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {registerRequest} from "../actions";

import Header from '../components/Header';

const Register = (props) => {
  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };

  return(
    <>
    <Header isRegister/>
    <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form" onSubmit={handleSubmit}>
        <input className="input"
               name="name"
               type="text" 
               placeholder="Nombre"
               onChange={handleInput}/>
        <input className="input" 
               name="email"
               type="text" 
               placeholder="Correo"
               onChange={handleInput}/>
        <input className="input" 
               name="password"
               type="password" 
               placeholder="Contraseña"
               onChange={handleInput}/>
        <button className="button" type="submit">Registrarme</button>
      </form>
      <Link to="/login">
      ¿Ya tienes una cuenta? Iniciar Sesión
      </Link>
    </section>
  </section>
  </>
  )
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);