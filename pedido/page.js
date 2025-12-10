import { Pedido } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";

async function removePed (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await Pedido.findByPk(id);
    await idExc.destroy();
    redirect('/pedido');
}

async function Pedido (){
    const ped = await Pedido.findAll();
    return (
        <div>
            <h1>Pedido
            </h1>
            <a href= '/pedido/novoPed'>Cadastrar novo Pedido</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Valor Total</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ped.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.id}</td>
                                    <td>{fill.Data}</td>
                                    <td>{fill.Status}</td>
                                    <td>{fill.ValorTotal}</td>
                                    <td>
                                        <form action={removePed}>
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

export default Pedido;