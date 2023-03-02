import React, { useEffect, useState } from "react";
 
import { Link, useParams } from "react-router-dom";

const ClientDetailServices = (props)=>{
       
    const {clientid} = useParams();
    const [servico, setServico] = useState({});
    const baseURL = 'https://api-clintes-dep-davidgamaserrate1.vercel.app/servico/'

    useEffect(()=>{
        fetch(baseURL+clientid).then((res)=>{
            return res.json()
        }).then((res)=>{
            setServico(res)            
        }).catch((err) => {
            console.log('Erro Serviço : ' + err.message)
        })
    },[])   

    const getTotal  = () =>{
        let sum = 0;
        for (let i = 0; i < servico.length; i++){
            sum += servico[i].valor;
        }
        return sum;
    }    
    const totalService = getTotal();
    
    const RemoveSerice = (id) => {

        if (window.confirm('Tem certeza que deseja excluir este serviço?')) {
            fetch(baseURL + id,{method:'DELETE'}).then((res) => {
                window.location.reload();
            }).catch((err) => {
                console.log(err + ' resp : ' + err.message)
            })
        }
    }
    
    return (
        <div className="container">
        <h2 style={{'margin':'10px'}}>Artes</h2>
        {servico.length > 0 ? 
        (
            <div className="card" style={{ "marginTop": '50px'}} >           
                <Link className='btn btn-primary' 
                to={{pathname : `/servico/adicionar/${clientid}`,
                    state: {clientid: clientid}  }} 
                style={{'display':'flex','width' : '100px','marginLeft': '20px','marginTop': '15px'}} >Adicionar</Link>    
                <div className="card-body" >
                    <div className="table table-bordered"  style={{'display':'flex',   'fleDirection':'column','justifyContent':'center'}}>
                        <table className="table table-bordered" >
                        <thead className="table-head" >
                            <tr style={{'textTransform':'uppercase'}}>
                                <td>Arte/projeto</td>
                                <td>Descricao</td>
                                <td>Data</td>
                                <td>Valor</td>
                                <td colSpan={'3'} >Ação</td>                                
                            </tr>
                        </thead>
                        <tbody> 
                        {servico.length >= 1 &&
                            servico.map(item =>(
                                <tr key={item._id}>
                                    <td>{item.nome}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.data}</td>
                                    <td> { item.valor !== (undefined || 0 || null )? 'R$ ' + item.valor : ''  } </td>
                                    <td>
                                    <Link to={`/servico/editar/${item._id}`} className='btn btn-secondary'> Editar</Link>                                    
                                        <div onClick={() => { RemoveSerice(item._id) }} className='btn btn-primary'> Remover</div>
                                    </td>                                                                  
                                </tr>
                        ))}                        
                        <tr>
                            <td ><b>Total</b></td>
                            <td colSpan={'2'} ></td>    
                            <td ><b>R$ {totalService}</b></td>    
                        </tr>
                        </tbody>
                        </table>                        
                    </div>                    
                </div>                
            </div>            
        ) : (
            <>
            <div  className="card" style={{'display':'flex','color':'#000000', 'height':'90px','textAlign':'center'}}> 
            <p  style={{'marginTop':'1.5rem'}} >Nenhum serviço realizado  &#9785;</p>
            <div className='divbtn'>
                <Link className='btn btn-primary' 
                    to={{pathname : `/servico/adicionar/${clientid}`,
                    state:  clientid }} 
                    style={{'marginLeft':'auto','display':'flex','width' : 'auto'}} >  
                    <p style={{'display':'flex','textAlign':'center'}}  > Adicionar Serviço</p>
                </Link>    
            </div>
            </div>              
           </>
        )
       }
        </div>
    )
}

export default ClientDetailServices 