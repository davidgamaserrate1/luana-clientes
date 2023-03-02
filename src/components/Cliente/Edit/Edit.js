import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

const Edit = () => {
    const { clientid } = useParams();

    useEffect(() => {
        fetch(process.env.REACT_APP_CLIENT + clientid).then((res) => {
            return res.json();
        }).then((resp) => {
            console.log(resp.nome)
            setNome(resp.nome)
            setInstagram(resp.instagram)
            setTelefone(resp.telefone)
            setOrganizacao(resp.organizacao)
            setValidation(resp.validation)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [])

    const [nome, setNome] = useState("")
    const [instagram, setInstagram] = useState("")
    const [telefone, setTelefone] = useState("")
    const [organizacao, setOrganizacao] = useState("")
    const [validation, setValidation] = useState(false)

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const cliente = { nome, instagram, telefone, organizacao };
        
        fetch( process.env.REACT_APP_EDIT_CLIENT + clientid, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(cliente)
        }).then((res) => { navigate('/') }).catch((err) => {
            console.log(err)
        })
    }


    return (
        <div  >
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <div className="container">
                        <div className="card" style={{ "textAlign": "left", "background": "#e70052 ", "color": "#ffffff", "fontFamily": "Montserrat, sans-serif" }}>
                            <div className="card-tittle" style={{ "textAlign": "center", "padding": "10px" }}> Editar Cliente </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Nome</label>
                                            <input required value={nome} onMouseDown={e => setValidation(true)} onChange={e => setNome(e.target.value)} className="form-control" />
                                            {nome.length === 0 && validation && <span className='text-danger'> Preencha o nome </span>}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <input value={instagram} onChange={e => setInstagram(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Telefone</label>
                                            <input value={telefone} onChange={e => setTelefone(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Organização</label>
                                            <input value={organizacao} onChange={e => setOrganizacao(e.target.value)} className="form-control"></input>
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

export default Edit