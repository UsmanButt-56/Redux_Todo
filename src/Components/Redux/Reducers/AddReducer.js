import { ActionType } from "../Constants/ActionType"

const initialState = {
    item : []
}
export const Add_Reducer = (state = initialState , {type , payload}) =>
{
   switch(type)
   {
    case ActionType.ADD_ITEM :
    return {
       ...state,
       item : [...state.item , payload]
    }
    default : 
    return state;
   }
}