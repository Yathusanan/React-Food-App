import { useReducer } from "react";
import CartContext from "./Cart-Context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {

    if (action.type === "ADD") {
        const updatedItem = state.items.concat(action.item);
        const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;

        return {
            items: updatedItem,
            totalAmount: updatedtotalAmount
        }
    }

    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD",
            item: item
        });
    };

    const removeItemFromartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE",
            id: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;