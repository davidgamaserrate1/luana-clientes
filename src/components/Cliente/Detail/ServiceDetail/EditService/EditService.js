 import { useEffect, useState } from "react";
import {   useParams } from "react-router";

 import { useNavigate  } from 'react-router-dom'
 

const EditService = ()=>{
    const _id = useParams();
    const navigate = useNavigate();
 
    useEffect(()=>{
        fetch(process.env.REACT_APP_EDIT_SERVICE + _id.clientid).then((res) => {    
            
            return res.json();
        }).then((resp)=> {             
            setNome(resp[0].nome)
            setDescricao(resp[0].descricao)
            setData(resp[0].data)
            setValor(resp[0].valor)             
        }).catch((err) => {
            console.log('erro ao consultar serviço : ' + err.message)
        })
    },[])
    const [nome, setNome]= useState("")
    const [descricao, setDescricao] =useState("")
    const [data, setData]=useState("")
    const [valor, setValor]=useState("")    

    const backHistory = ()=>{
        navigate(-1) ;
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        const servico = {nome, descricao, data, valor}
        
        fetch(process.env.REACT_APP_EDIT_SERVICE+_id.clientid, {            
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(servico)
        }).then((res) => {  navigate(-1) }).catch((err) => {
            console.log(err)
        })
        .catch((err) => {
            navigate('/clientes/'+_id.clientid) 
        })
    }
    

    return(
        <div>
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <div className="container">
                <div className="card" style={{ "textAlign": "left", "background": "#e70052 ", "color": "#ffffff", "fontFamily": "Montserrat, sans-serif" }}>                        
                        <div className="card-body">
                            <div className="row">
                                 
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Nome</label>
                                        <input required value={nome}  onChange={e => setNome(e.target.value)} className="form-control" />                                        
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
                                        <div  className='btn btn-primary' onClick={backHistory}> Voltar </div>

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

export default EditService