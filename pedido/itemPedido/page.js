import { itemPedido } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function removeIP (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await itemPedido.findByPk(id);
    await idExc.destroy();
    redirect('/itemPedido');
}

async function itemPedido (){
    const IPed = await itemPedido.findAll();
    return (
        <div>
            <h1>itemPedido
            </h1>
            <a href= '/itemPedido/novo'>Cadastrar novo Item Pedido</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Quantidade</th>
                        <th>Preço por Unidade</th>
                        <th>Sub-Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        IPed.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.id}</td>
                                    <td>{fill.Quantidade}</td>
                                    <td>{fill.PrecoUnitario}</td>
                                    <td>{fill.Subtotal}</td>
                                    <td>
                                        <form action={removeIP}>
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

export default itemPedido;