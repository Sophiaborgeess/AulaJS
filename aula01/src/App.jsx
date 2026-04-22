import "./App.css";
export default function App()
 {
  let nome, idade, dias 
  nome="Sophia Borges"
  idade= 16;
  dias = idade * 365;


  return (

    <div>
    
    <h1>
    Olá Mundo!
    </h1>

    <div className="conteudo">

      <p>Olá, seja bem vindo o react com JS.</p>
      <p>O aluno {nome}</p>

    </div>

    </div>
  )
}
