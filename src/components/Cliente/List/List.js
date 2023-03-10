import './style.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import barra from '../../../assets/barra.png'
import useAuth from '../../../hooks/useAuth';  

const List = () => {    
    const signed = useAuth().signed;
    const [cliente, setCliente] = useState(null);

    const RemoveClient = (id) => {
        if (window.confirm('Tem certeza que deseja excluir este cliente?')) {
            fetch(process.env.REACT_APP_CLIENT + id,{method:'DELETE'}).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err + ' resp : ' + err.message)
            })
        }
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_CLIENT).then((res) => {
            return res.json();
        }).then((resp) => {
            setCliente(resp);
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    return (
        <div className="container"  >

            <div className="card" 
            style={{'backgroudColor' : '#f1ecea','borderRadius':'15px'}} >
                <div className="card-tittle">
                <img className='barra-cadastro' src={barra} alt={'barra-cadastro'}/>
                </div>
                <div className="card-body" >
                    <div className='divbtn'>
                        <Link className='btn btn-primary' to="/clientes/adicionar"
                        style={{'marginBottom':'10px'}} >Adicionar</Link>                        
                    </div>
                    
                    <table className="table table-bordered" >
                        <thead className="table-head" 
                        style={{
                            'borderTopRightRadius': '15px',                            
                            }}>
                            <tr 
                            style={{
                                'textTransform': 'uppercase', 
                                'boxShadow':'1px 1px 10px #303030',
                                 'borderRadius': '15px'
                                }}>
                                <td>nome </td>
                                <td>instagram</td>
                                <td>telefone</td>
                                <td>organizacao</td>
                                <td>Ação</td>
                            </tr>
                        </thead>
                        <tbody>
                            {                            
                            (cliente &&
                                cliente.map(item => (
                                    < tr key={item._id} >
                                        <td>{item.nome}</td>
                                        <td>{item.instagram}</td>
                                        <td>{item.telefone}</td>
                                        <td>{item.organizacao}</td>
                                        <td> 
                                         
                                            <Link to={`/clientes/editar/${item._id}`} className='btn btn-secondary'> Editar</Link>
                                            <Link to={{pathname : `/clientes/${item._id}`, state:  item._id }}   className='btn btn-primary'>  Detalhes</Link>   
                                                                                  
                                            <a onClick={() => { RemoveClient(item._id) }} className='btn btn-dark'> Remover</a>
                                        </td>
                                    </tr>
                                )))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    )
}

export default List
