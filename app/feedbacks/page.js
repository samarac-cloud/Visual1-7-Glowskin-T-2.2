import { Feedback } from "../../database/tables";
import {redirect} from 'next/navigation';
import "../css/listagem.css";


async function removeFb (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await Feedback.findByPk(id);
    await idExc.destroy();
    redirect('/feedbacks');
}
async function Feedbacks (){
    const fb = await Feedback.findAll();
    return (
        <div>
            <h1>Feedbacks
            </h1>
            <a href= '/feedbacks/novo'>Cadastrar novo Feedback</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID do Cliente</th>
                        <th>Comentario</th>
                        <th>Nota Dada</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        fb.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.ClienteId}</td>
                                    <td>{fill.Comentario}</td>
                                    <td>{fill.Nota}</td>
                                    <td>
                                        <form action={removeFb}>
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

export default Feedbacks;