

import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import ClientList from '../components/Cliente/List/List.js';
import Create from '../components/Cliente/Create/Create.js';
import ClientDetail from '../components/Cliente/Detail/Index.js';
import ClientEdit from '../components/Cliente/Edit/Edit.js';
import EditService from '../components/Cliente/Detail/ServiceDetail/EditService/EditService.js'; 
import ServiceCreate from '../components/Cliente/Detail/ServiceDetail/CreateService/CreateService.js'
import Login from '../components/Login'; 
import useAuth from '../hooks/useAuth';
import { useEffect, useState } from 'react';




function RoutesApp() {   
   
   
const Private =({Item}) =>{       
   
    const signed = useAuth().signed;
    return signed > 0 ? <Item/> : <Route path='/login' element={ <Login/>}></Route> 
   
  
}
  return (
    
        <BrowserRouter>  
          <Routes>                    
            <Route path='/login' element={ <Login/>}></Route>

            <Route path='/' element={ < Private Item={ClientList} />}></Route>
            <Route path='/clientes' element={ < Private Item={ClientList} />}></Route>
            <Route path='/clientes/adicionar'  element={ < Private Item={Create } />}></Route>
            <Route path='/clientes/:clientid' element={ < Private Item={ClientDetail } />}></Route>
            <Route path='/clientes/editar/:clientid' element={ < Private Item={ClientEdit } />}></Route>
            <Route path='/servico/adicionar/:clientid' element={ < Private Item={ServiceCreate} />}></Route>            
            <Route path='/servico/editar/:clientid' element={ < Private Item={EditService} />}></Route>            
          </Routes>
        </BrowserRouter>
      
    
                
  );

        
 
}

export default RoutesApp;

