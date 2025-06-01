import { listControl } from "@/Reducers/listControl"
import { useReducer, useState } from "react"

export const ListJob = ()=> {



    const [itemInput, setItemInput] = useState('')
    const initialList = [
        {
            id:0,
            nome:'Pedro',
            done:true
        }
    ]
    const [list, dispatch] = useReducer(listControl, initialList)

    const handdleAdd = ()=>{
        if(itemInput.trim()){
            dispatch({
            type:'add',
            payload:itemInput
        })
        }
        setItemInput('')
    }
    
    const handdleCheckBox = (id)=>{
        dispatch({
            type:'toggleDone',
            payload:{id}
        })
    }
    const handdleEdit = (id)=>{

        const newText = prompt('Digite o novo texto')
        if(newText){
            dispatch({
                type:'edit',
                payload:{id, newText}
            })
        }
    }
    const handdleRemove = (id)=>{
        dispatch({
            type:'remove',
            payload:id
        })
    }

    return(
        <div className="mx-auto mt-2">
            <h1 className="text-2xl font-bold text-center">Lista de Tarefas</h1>
            <div className="flex justify-center ">
                <div className="bg-gray-400 w-2xl py-4 flex justify-center rounded-md">
                    <input type="text" className="outline-none bg-white rounded mr-3 px-1 text-black"
                        value={itemInput}
                        onChange={i=>setItemInput(i.target.value)}
                        onKeyDown={e=>{
                            if(e.key === 'Enter'){
                                handdleAdd()
                            }
                        }}
                    />
                    <button className="bg-black rounded-md text-white p-1"
                        onClick={handdleAdd}
                        disabled={itemInput.trim() === ''}
                    >Adicionar</button>
                </div>
            </div>
            <div>
                <ul className="max-w-2xl mx-auto">
                    {list.map((i)=>(
                        <li key={i.id} className="flex p-2 border-b border-gray-500 items-center">
                            <input type="checkbox" className="w-6 h-6" checked={i.done} onChange={()=>{handdleCheckBox(i.id)}}/>
                            <p className="flex-1 ml-2">{i.nome}</p>
                            <button  onClick={()=>{handdleEdit(i.id)}} className="bg-blue-500 text-white p-1 rounded-md">Editar</button>
                            <button className="bg-red-500 text-white p-1 rounded-md" onClick={()=>{handdleRemove(i.id)}}>Excluir</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}