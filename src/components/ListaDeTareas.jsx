import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import "../styles/ListaDeTareas.css";


function ListaDeTareas () {

    const [tareas, setTareas] = useState([]);   
    
    const agregarTarea = tarea =>
    {
    console.log (tarea.texto);

        if (tarea.texto) {

            tarea.texto = tarea.texto.trim();

            const tareasActualizadas = [tarea, ...tareas];

            console.log(tareasActualizadas);

            setTareas(tareasActualizadas);

        }

    }

    const eliminarTarea = id => {

const tareasActualizadas = tareas.fliter(tarea => tarea.id !== id)

setTareas(tareasActualizadas);

    }



return (

<>
<TareaFormulario onSubmit={agregarTarea} />
<div className='tareas-lista-contenedor'>

{

tareas.map((tarea) =>

<Tarea
    key={tarea.id}
    id={tarea.id} 
    texto={tarea.texto}
    completada={tarea.completada}
    eliminarTarea ={tarea.eliminarTarea}


/>


)

}

</div>
</>

)

}

export default ListaDeTareas;