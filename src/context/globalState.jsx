import { React, createContext, useReducer } from "react";
import AppReducer from './AppReducer.jsx'

// Initial state
const initialState = {
  transaction: [],
};

//create context

export const GlobalContext = createContext(initialState)

// provider component 
export  const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState) 

    //Actions
    const deleteTransaction = (id) =>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    const addTransaction = (transaction) =>{
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return(<GlobalContext.Provider value={{
        transaction:state.transaction,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>)
}