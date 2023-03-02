import './style.css'
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

const ContactDetail = ( idCliente) => {
    const { clientid } = useParams();
    const [cliente, setCliente] = useState({})
    const baseURL = 'https://api-clintes-dep-davidgamaserrate1.vercel.app/clientes/'

    useEffect(() => {
        fetch(baseURL + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            setCliente(resp);            
        }).catch((err) => {
            console.log('detalhe err  : ' + err.message)
        })
    }, [])

    return (
        <div className="container">
            <div className="card">
            <div className="card-body"
            style={{'textAlign':'left', 'color': '#000000'}} >
                    {cliente &&
                        <div className="cliente-info">
                            <h5 className='cliente-nome'> cliente : {cliente.nome} </h5>
                            <h5 className='cliente-contato'>Informações de Contato:</h5>
                            <h5 className='cliente-contato' >Instagram : <span id='clinte-contato_info'>  <a href={`https://www.instagram.com/${cliente.instagram}/`}>{cliente.instagram}</a>  </span></h5>
                            <h5 className='cliente-contato' >Telefone :  <span id='clinte-contato_info'>{cliente.telefone}</span></h5>
                            <h5 className='cliente-contato' >Organização: <span id='clinte-contato_info'>{cliente.organizacao}</span></h5>
                            <Link className="btn btn-secondary" to="/">Inicio</Link>
                        </div>
                    }
                 </div>
            </div>
        </div>
    )
}

export default ContactDetail