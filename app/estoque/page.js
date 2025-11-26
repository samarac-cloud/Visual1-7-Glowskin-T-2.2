import { Estoque } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";


async function removeEst (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await Estoque.findByPk(id);
    await idExc.destroy();
    redirect('/estoque');
}
async function Estoques (){
    const estq = await Estoque.findAll();
    return (
        <div>
            <h1>Estoques
            </h1>
            <a href= '/estoque/att'>Renovar Estoque</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ID_Produto</th>
                        <th>Quantidade</th>
                        <th>Local</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        estq.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.id}</td>
                                    <td>{fill.ProdutoId}</td>
                                    <td>{fill.Quantidade}</td>
                                    <td>{fill.Local}</td>
                                    <td>
                                    <form action={'/estoque/edita'}>
                                            <input type="hidden" name="id" defaultValue={fill.id}/>
                                            <button name= "editar">&#9998;</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action={removeEst}>
                                            <input type="hidden" name="id" defaultValue={fill.id}/>
                                            <button>Excluir</button>
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

export default Estoques;