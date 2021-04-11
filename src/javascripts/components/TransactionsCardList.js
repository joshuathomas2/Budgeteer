import React, { useState, createContext, useEffect} from "react";
import {TransactionCard} from './TransactionCard'


export const CategoryContext = createContext() 

export function TransactionsCardList(props) {
  const [categories, setCategories] = useState()

  useEffect(() => {
    if(!categories) {
      fetch('/api/v1/categories', {
        credentials: "same-origin"
      })
       .then(response => response.text())
       .then(data => {
         console.log(data)
         setCategories(JSON.parse(data.categories))
       })
    }
  })

  return (
      //TODO Render cards dynamically based on results of a GET /categories api call. 
      //I have 4 hard coded components for layout purposes
   
      <CategoryContext.Provider value={{categories, setCategories}}>
     
    </CategoryContext.Provider>
    


    );
}
