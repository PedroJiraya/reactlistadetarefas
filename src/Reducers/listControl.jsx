export const listControl = (list, action)=>{
    

    switch (action.type){


        // acoes a serem execultadas 

        //adicionar um novo campo a lista
        case 'add':
            return [...list,{
                id:list.length,
                nome:action.payload,
                done:false
            }]
        // editar um campo da lista
        case 'edit':
            return list.map(t=>{
                if(t.id === action.payload.id){
                    return {
                        ...t,
                        nome: action.payload.newText
                    }
                }
                return t
            })
        case 'toggleDone': 
            return list.map(t => {
                if(t.id === action.payload.id) {
                    return {
                        ...t,
                        done: !t.done
                    }
                }
                return t
            })
        case 'remove':
            return list.filter(t=>{
                t.id !== action.payload
            })
        default:
            return list

    }
}