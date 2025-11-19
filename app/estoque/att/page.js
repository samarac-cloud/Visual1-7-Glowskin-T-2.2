import {Estoque} from '../../../database/tables';
import {redirect} from 'next/navigation';

async function alteraEstoque(formData){
    'use server';
    const estq = await Estoque.findOne({where: {ProdutoId: formData.get('produtoID'), Local: formData.get('local') }});
    estq.Quantidade = formData.get('quant');
    estq.Local = formData.get('local');
    await estq.save();

    redirect ('/estoque');
}



function TelaAlteraEstoque(){
    return (
        <>
        <form action= {alteraEstoque}>
            <label htmlFor= "produtoID">ID do Produto</label><br/>
            <input type= "text" name="produtoID"/> <br/>

            <label htmlFor= "quant">Quantidade</label><br/>
            <input type= "number" name="quant"/> <br/>

            <label htmlFor= "local">Local</label><br/>
            <input type= "text" name="local"/> <br/>

            <button>Atualizar</button>

        </form>
        </>
    )
}
export default TelaAlteraEstoque;