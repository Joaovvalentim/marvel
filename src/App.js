
import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Input from './components/input/input';
import logo from './assets/marvel-logo.png'
import logo2 from './assets/marvel-logo-quadrinhos.png'


function App() {
  const [fieldsValidity, setFieldsValidity] = useState([]); // Inicializa o array de erros
  const [payload, setPayload] = useState([]);
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const errors = handleOnBlur(payload, "submit");

    if (errors.length === 0) {
      const FirstName = payload.nome.split(" ")?.[0];
      const LastName = payload.nome.split(" ")?.[1];
      sessionStorage.setItem("FirstName", FirstName);
      sessionStorage.setItem("LastName", LastName);
      navigate("/home")
    }
  }

  const handleOnBlur = (e, prop) => {//e = valor digitado, prop =  nome do input 
    const errors = [];
    if ((prop === "nome" && !e?.target?.value) || (prop === "submit" && !e?.nome)) {
      errors.push({
        prop: "nome",
        errorMessage: "Insira seu nome para entrar"
      })
    }
    setFieldsValidity(errors)
    return errors;
  }
  const handleChangeInputs = (value, prop) => {
    setPayload({ ...payload, [prop]: value })
  }
  return (
    <>
      <div className='home'>
        <div className='container'>
          <div className='logos'>
            <img alt='#' src={logo} />
            <img className='logo-img-2' alt='#' src={logo2} />
          </div>
          <div className='title'>
            <h2>ENTRAR</h2>
          </div>
          <form
            onSubmit={handleSubmit}
          >
            <div className='group'>
              <label className='label'><b>Nome</b></label>
              <Input
                id="Nome"
                onChange={(e) => handleChangeInputs(e.target.value, "nome")}
                value={payload.nome}
                name="nome"
                type="text"
                placeholder="Seu nome"
                length="20"
                error={fieldsValidity}
                handleOnBlur={handleOnBlur}
              />
            </div>
            <div className="container-button">
              <button type='submit' className='button'>
                Concluir
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );

}

export default App;
