
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ClientList from './components/Cliente/List/List.js';
import Create from './components/Cliente/Create/Create.js';
import ClientDetail from './components/Cliente/Detail/Index.js';
import ClientEdit from './components/Cliente/Edit/Edit.js';
import EditService from './components/Cliente/Detail/ServiceDetail/EditService/EditService.js'; 
import ServiceCreate from './components/Cliente/Detail/ServiceDetail/CreateService/CreateService.js'


function App() {
  return (
    <div className="App">
      <div className="row"> _ </div>
      <div className="row"> _ </div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ClientList />}></Route>
          <Route path='/clientes' element={<ClientList />}></Route>
          <Route path='/clientes/adicionar' element={<Create />}></Route>
          <Route path='/clientes/:clientid' element={<ClientDetail />}></Route>
          <Route path='/clientes/editar/:clientid' element={<ClientEdit />}></Route>
          <Route path='/servico/adicionar/:clientid' element={<ServiceCreate/>}></Route>          
          <Route path='/servico/editar/:clientid' element={<EditService/>}></Route>          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

