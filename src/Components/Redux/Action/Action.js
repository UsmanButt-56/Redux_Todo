import { ActionType } from "../Constants/ActionType"

export const Add = (items) =>
{
    return {
        type : ActionType.ADD_ITEM,
        payload : items
    };
}