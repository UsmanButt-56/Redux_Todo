import { ActionType } from "../Constants/ActionType"

export const Add = (items) =>
{
    return {
        type : ActionType.ADD_ITEM,
        payload : items
    };
}

export const Remove = (id) =>
{
    return {
        type : ActionType.REMOVE_ITEM,
        payload : id
    }
}

export const Edit = (items , index) =>
{
    return {
        type : ActionType.EDIT_ITEM,
        payload : { items , index },
        // d : id
    }
}