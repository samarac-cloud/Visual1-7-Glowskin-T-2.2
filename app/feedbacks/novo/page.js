import {Feedback} from '../../../database/tables';
import {redirect} from 'next/navigation';

async function insereFeedback(formData){
    'use server';
    const dados = {
        Comentario: formData.get('comentario'),
        Nota: formData.get('nota'),
        ClienteId: formData.get('clienteID')
    };
    await Feedback.create(dados);
    redirect ('/feedbacks');
}

function TelaNovoFeedback(){
    return (
        <>
        <form action= {insereFeedback}>
            <label htmlFor= "comentario">Comentario</label><br/>
            <input type= "text" name="comentario"/> <br/>

            <label htmlFor= "nota">Nota</label><br/>
            <input type= "text" name="nota"/> <br/>

            <label htmlFor= "clienteID">ClienteID</label><br/>
            <input type= "text" name="clienteID"/> <br/>

            <button>Cadastrar</button>

        </form>
        </>
    )
}
export default TelaNovoFeedback;