
import './App.css';
import { useState } from 'react';
import Input from './components/input/input';
import logo from './assets/marvel-logo.png'
import logo2 from './assets/marvel-logo-quadrinhos.png'
function App() {
  const [fieldsValidity, setFieldsValidity] = useState([]); // Inicializa o array de erros
  const [payload, setPayload] = useState([]);


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
        </div>
      </div>
    </>
  );

}

export default App;
