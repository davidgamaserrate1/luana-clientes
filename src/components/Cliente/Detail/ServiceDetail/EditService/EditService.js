 import { useEffect, useState } from "react";
import {   useParams } from "react-router";

 import { useNavigate  } from 'react-router-dom'
 

const EditService = ()=>{
      

    const _id = useParams();
    const baseURL = 'https://api-clintes-dep-davidgamaserrate1.vercel.app/servico/editar/'
    const navigate = useNavigate();
    //const history = useHistory();
    // function goBack(){
    //     history.goBack();
    // }

    useEffect(()=>{
        fetch(baseURL + _id.clientid).then((res) => {    
            //console.log(res)      
            return res.json();
        }).then((resp)=> { 
            //console.log('resp.nome ' + resp.nome)                      
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
    // console.log(_id.clientid)

    const backHistory = ()=>{
        navigate(-1) ;
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault();

        const servico = {nome, descricao, data, valor}
        console.log(  JSON.stringify(servico))
        fetch(baseURL+_id.clientid, {            
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
                                        {/* <Link to='/' className='btn btn-primary'> Voltar </Link> */}
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