import {Cliente} from '../../../database/tables';
import {redirect} from 'next/navigation';

async function editaCliente (formData){
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const email = formData.get('email');
    const senha=formData.get('senha');

    const cliente = await Cliente.findByPk (id);

    cliente.Nome = nome;
    cliente.Email = email;
    cliente.Senha = senha;

    await cliente.save();
    redirect('/clientes');
}

async function TelaNovoCliente({searchParams}){

    const id = searchParams.id;
    const cliente = await Cliente.findByPk(id);
    console.log(cliente);
    return (
        <>
        <form action= {editaCliente}>
            <input type='hidden' name='id' defaultValue={cliente.id}></input>

            <label htmlFor= "nome">Nome</label><br/>
            <input type= "text" name="nome" defaultValue={cliente.Nome}/> <br/>

            <label htmlFor= "email">Email</label><br/>
            <input type= "text" name="email"defaultValue={cliente.Email}/> <br/>

            <label htmlFor= "senha">Senha</label><br/>
            <input type= "text" name="senha" defaultValue={cliente.Senha}/> <br/>

            <button>Atualizar</button>


        </form>
        </>
    )
}
export default TelaNovoCliente;


