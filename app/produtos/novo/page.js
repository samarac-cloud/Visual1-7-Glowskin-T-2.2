import {Produto} from '../../../database/tables';
import {redirect} from 'next/navigation';

async function insereProduto(formData){
    'use server';
    const dados = {
        Nome: formData.get('nome'),
        Valor: formData.get('valor'),
        Descricao: formData.get('descricao')
    };
    await Produto.create(dados);
    redirect ('/produtos');
}

function TelaNovoProduto(){
    return (
        <>
        <form action= {insereProduto}>
            <label htmlFor= "nome">Nome</label><br/>
            <input type= "text" name="nome"/> <br/>

            <label htmlFor= "valor">Valor</label><br/>
            <input type= "text" name="valor"/> <br/>

            <label htmlFor= "descricao">Descrição</label><br/>
            <input type= "text" name="descricao"/> <br/>

            <button>Cadastrar</button>

        </form>
        </>
    )
}
export default TelaNovoProduto;