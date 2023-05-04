import { GlobalContext } from '../context/globalState'
import React,  { useContext } from 'react'
import Transanction from './Transanction'

const TransanctionList = () => {
    const {transaction} = useContext(GlobalContext)

   

  return (
    <>
    <h3>History</h3>
    <ul className="list">
    {transaction.map(transactions =>(
        <Transanction 
        key={transactions.id} 
        transactions={transactions}/>
    ))}
    
    </ul>  
    </>
  )
}

export default TransanctionList