import { ADD_TO_CART, REMOVE_TO_CART } from '../constant'

const initialState = {
    cartData: []
}
export default function cardItem(state = [], action) {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_TO_CART:
            //console.warn('reducer', action);

            return [
                ...state,
                { cartData: action.data }
            ]
            break;
        case REMOVE_TO_CART:
            //console.warn('reducer', action);
            state.pop();
            return [
                ...state,
            ]
            break;
        default:
            return state
    }
}