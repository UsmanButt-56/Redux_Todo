import { ActionType } from "../Constants/ActionType";

const initialState = {
  item: [],
};

export const Add_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_ITEM :
      return {
        ...state,
        item: [...state.item, payload],
      };
    case ActionType.REMOVE_ITEM :
      //const temp = state.item.filter((index) => index !== payload);
      return {
        ...state,
        item: state.item.filter((_ ,index) => index !== payload)
      };
    case ActionType.EDIT_ITEM :
      return {
        ...state,
        item : state.item.map((item , index) => index === payload.index ? payload.items : item),
      };
    default :
      return state;
  }
};