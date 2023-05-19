import { SIGNUP,GET_USERS,DELETE_USERS } from "../action/type";

const initialState = {
  tasks: [],
};

export const taskreducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
      case GET_USERS:
        return {
          ...state,
          tasks: action.payload,
        };
        case DELETE_USERS:
          const updatedTasks = state.tasks.filter(
            (task) => task._id !== action.payload
          );
          return {
            ...state,
            tasks: updatedTasks,
          };
    default:
      return state;
  }
};
