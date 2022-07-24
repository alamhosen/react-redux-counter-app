import { DECREMTNT, INCREMTNT, RESET } from "../constants/counterConstant";

const initialCounter = {
    counter:0
}

const counterReducer = (state = initialCounter, action) =>{
switch (action.typ) {
    case INCREMTNT:       
        return {
            ...state,
            count: state.count + 1
        };

        case DECREMTNT:       
        return {
            ...state,
            count: state.count - 1
        };

        case RESET:       
        return {
            ...state,
            count: 0
        };

    default:
        return state;
}
};

export default counterReducer;