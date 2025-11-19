import { Cliente } from "../../database/tables";
import {redirect} from 'next/navigation';

async function removeCli (formData){
    "use server";
    const id = formData.get('id');
    const idExc = await Cliente.findByPk(id);
    await idExc.destroy();
    redirect('/clientes');
}

async function Clientes (){
    const cli = await Cliente.findAll();
    return (
        <div>
            <h1>Clientes
            </h1>
            <a href= '/clientes/novo'>Cadastrar novo Cliente</a>
            <br/>
            <br/>


            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Email</th>
                        <th>Senha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cli.map(function (fill){
                            return (
                                <tr key = {fill.id}>
                                    <td>{fill.id}</td>
                                    <td>{fill.Nome}</td>
                                    <td>{fill.Email}</td>
                                    <td>{fill.Senha}</td>
                                    <td>
                                    <form action={'/clientes/edita'}>
                                            <input type="hidden" name="id" defaultValue={fill.id}/>
                                            <button>Editar</button>
                                        </form>
                                    </td>
                                    <td>
                                        <form action={removeCli}>
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

export default Clientes;