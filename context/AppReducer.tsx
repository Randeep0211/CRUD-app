import React from 'react'



interface Paras {
    action : string,
    payload : string,
    type: any,

}

export default function AppReducer(state : any , action:Paras) {


    switch(action.type){
        
        case "addData":
            return {
                ...state,
                user:[...state.user , action.payload]
                
                
            }

        case "deleteData":
            return {
                ...state,
                user: state.user.filter((value: any) => {
                    return action.payload !== value.id;
                  })
                  
            }   

        case "editItem":
            const updateData = action.payload

            const updatedData = state.map((value: any)=>{
                if(value.id === updateData.id){
                    return updateData
                }
                return value

            
            })
            return {
                ...state,
                user : updatedData
            }

        default :
            return state    
                
    

    }




    
}
