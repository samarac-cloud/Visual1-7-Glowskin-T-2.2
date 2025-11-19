import {Produto} from '../../../database/tables';
import {redirect} from 'next/navigation';

async function editaProduto (formData){
'use server';

    const id = formData.get('id');
    const nome = formData.get('nome');
    const valor = formData.get('valor');
    const descricao=formData.get('descricao');

    const produto = await Produto.findByPk (id);

    produto.Nome = nome;
    produto.Valor = valor;
    produto.Descricao = descricao;

    await produto.save();
    redirect('/produtos');
}

async function TelaNovoProduto({searchParams}){

    const id = searchParams.id;
    const produto = await Produto.findByPk(id);
    console.log(produto);
    return (
        <>
        <form action= {editaProduto}>
            <input type='hidden' name='id' defaultValue={produto.id}></input>

            <label htmlFor= "nome">Nome</label><br/>
            <input type= "text" name="nome" defaultValue={produto.Nome}/> <br/>

            <label htmlFor= "valor">Valor</label><br/>
            <input type= "text" name="valor"defaultValue={produto.Valor}/> <br/>

            <label htmlFor= "descricao">Descrição</label><br/>
            <input type= "text" name="descricao" defaultValue={produto.Descricao}/> <br/>

            <button>Atualizar</button>


        </form>
        </>
    )
}
export default TelaNovoProduto;
