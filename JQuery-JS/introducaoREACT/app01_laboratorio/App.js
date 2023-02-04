import logo from './logo.svg';
import './App.css';
import Tabela from './components/Tabela.jsx';
import data_json from './data.json';

function App() {
  const numero = 15;
  const f1 = () => {
    console.log('Dentro da F1');
    return (
      <div className='div_f1'>
      <h2>{numero}</h2>
      </div>
    )
  }

  const mostra_dado = data_json.map(
    (info) => {
      return (
        <tr>
          <td>{info.id}</td>
          <td>{info.name}</td>
          <td>{info.city}</td>
        </tr>
      )
    }
  )


  

  return (
    <div className="App">
      <h1>Aeeee, funcionando!!!</h1>
      <div className='teste'>
        <p>Estou dentro da DIV</p>
        <br></br>
        <p>{numero}</p>
        {f1()}
        <div className='div_table'>
          <table className="table tabela-json">
            <thead>
              <tr>
                <th>Sr.NO</th>
                <th>Name</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>    
               {/* {mostra_dado}                                    */}
              {/* {carrega_tabela()} */}
              <Tabela />
            </tbody>
          </table>          
        </div>             
      </div>  
    </div>
  );
}

export default App;
