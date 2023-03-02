import {   useParams } from "react-router";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ServiceCreate = (props)=>{
    const navigate = useNavigate();
    const {clientid} =  useParams()

    const baseURL = 'https://api-clintes-dep-davidgamaserrate1.vercel.app/servico/adicionar/'    
    const [id] = useState("")
    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [data, setData] = useState("")
    const [valor, setValor] = useState("")      
    const [validation, setValidation] = useState(false)    
    
    //const [cliente_id, setCliente_id] =useState(clientid)   

    const handleSubmit = (e) =>{
        e.preventDefault();
        const cliente_id = clientid
        const service = {nome,  descricao, data, valor,cliente_id}

        fetch(baseURL + clientid, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(service),
            cache: 'default',
            type: 'cors'
        }).then((res) => {
            alert('Cliente cadastrado com sucesso!')
            navigate('/clientes/'+cliente_id)
        }).catch((err) => {
            console.log({ err })
        })
    }
    

    return(
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                    <div className="card" style={{ "textAlign": "left", "background": "#e70052 ", "color": "#ffffff", "fontFamily": "Montserrat, sans-serif" }}>
                            <div className="card-tittle" style={{ "textAlign": "center", "padding": "10px" }}>  Adicionar Serviço </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>id</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input required value={nome} onMouseDown={e => setValidation(true)} onChange={e => setNome(e.target.value)} className="form-control" />
                                            {nome.length === 0 && validation && <span   style={{'color':'#FFFFFF'}}> Preencha o nome</span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Descrição</label>
                                            <input value={descricao} onChange={e => setDescricao(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Data</label>
                                            <input  type="date"  value={data} onChange={e => setData(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Valor</label>
                                            <input placeholder="R$" value={valor} onChange={e => setValor(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button onClick={handleSubmit} className='btn btn-success' type='submit'>Salvar</button>                                            
                                            <Link to='/' className='btn btn-primary'> Voltar </Link>


                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>    
                    </div>        
                </div>
            </div>
        </div>
    )
}

export default ServiceCreate