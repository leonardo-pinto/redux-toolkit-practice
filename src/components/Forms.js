import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../redux/slices/forms';

function Forms() {
  const { email, password } = useSelector((state) => state.forms);
  const dispatch = useDispatch()
  const [formsInput, setFormsInput] = useState({
    userEmail: '',
    userPassword: '',
  })
  const { userEmail, userPassword } = formsInput;
  const [disabledButton, setDisabledButton] = useState(true);

  // this useEffect validates email and password to enable the 'Entrar' button
  useEffect(() => {
    const format = /\S+@\S+\.\S+/;
    const minPassword = 6;
    if (userPassword.length > minPassword && userEmail.match(format)) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [userEmail, userPassword])

  function handleInputChange({ target: { name, value }}) {
    setFormsInput({
      ...formsInput,
      [name]: value
    })
    //  handleValidation();
  }

  function handleLogin() {
    dispatch(login(formsInput));
    localStorage.setItem('mealsToken', 1);
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(userEmail));
  }

  return (
    <div>
      <form>
        <h1>Forms</h1>
        <label htmlFor="email">
          E-mail:
          <input
            type="text"
            name="userEmail"
            value={ userEmail }
            placeholder="Digite seu email"
            onChange={ handleInputChange }
            data-testid="email-input"
          />
        </label>
        <label htmlFor="email">
          Password:
          <input
            type="password"
            name="userPassword"
            value={ userPassword }
            placeholder="Digite seu password"
            onChange={ handleInputChange }
            data-testid="password-input"
          />
        </label>
        <button
          type="button"
          disabled={ disabledButton }
          data-testid="login-submit-btn"
          onClick={ handleLogin }
        >
          Entrar
        </button>
      </form>
      <section>
        <h2>Current user info from store:</h2>
        <p>E-mail: {email}</p>
        <p>Password: {password}</p>
      </section>
      <Link to="/">
        <button>
          HOME
        </button>
      </Link>
    </div>
  )
}

export default Forms;
