import { Produto } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function removeProd (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await Produto.findByPk(id);
    await idExc.destroy();
    redirect('/produtos');
}

async function Produtos (){
    const prods = await Produto.findAll();
    return (
        <div>
            <h1>Produtos
            </h1>
            <a href= '/produtos/novo'>Cadastrar novo produto</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Valor</th>
                        <th>Descricao</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        prods.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.id}</td>
                                    <td>{fill.Nome}</td>
                                    <td>{fill.Valor}</td>
                                    <td>{fill.Descricao}</td>
                                    <td>
                                    <form action={'/produtos/edita'}>
                                            <input type="hidden" name="id" defaultValue={fill.id}/>
                                            <button name= "editar">&#9998;</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action={removeProd}>
                                            <input type="hidden" name="id" defaultValue={fill.id}/>
                                            <button nama= "excluir">&#10008;</button>
                                        </form>

                                    </td>

                                </tr>
                            )
                        }
                    )
                    }
                </tbody>
            </table>
        </div>
    )

}

export default Produtos;