import {Cliente} from '../../../database/tables';
import {redirect} from 'next/navigation';
import '../../css/cadastro.css';

async function insereCliente(formData){
    'use server';
    const dados = {
        Nome: formData.get('nome'),
        Email: formData.get('email'),
        Senha: formData.get('senha')
    };
    await Cliente.create(dados);
    redirect ('/clientes');
}

function TelaNovoCliente(){
    return (
        <>
        <form action= {insereCliente}>
            <label htmlFor= "nome">Nome</label><br/>
            <input type= "text" name="nome"/> <br/>

            <label htmlFor= "email">Email</label><br/>
            <input type= "text" name="email"/> <br/>

            <label htmlFor= "senha">Senha</label><br/>
            <input type= "text" name="senha"/> <br/>

            <button>Cadastrar</button>

        </form>
        </>
    )
}
export default TelaNovoCliente;