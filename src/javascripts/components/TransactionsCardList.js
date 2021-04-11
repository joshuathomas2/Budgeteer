import React, { useState, createContext, useEffect} from "react";
import {TransactionCard} from './TransactionCard'
import { useCookies } from 'react-cookie'


export const CategoryContext = createContext() 

export function TransactionsCardList(props) {
  const [categories, setCategories] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [userID, setUserID] = useState()

  useEffect(() => {

    fetch('/api/v1/users/getCurrentUser', {
      credentials: "same-origin"
    })
    .then(response => response.text())
    .then(data => {
      const user = JSON.parse(data)
      setUserID(user._id)
      console.log("UserID: " + userID)
    })
  
  })

  useEffect(() => {
    if(userID) {
      if(!categories) {
        fetch(`/api/v1/categories/${userID}`, {
          credentials: "same-origin"
        })
         .then(response => response.text())
         .then(data => {
           console.log(data)
         })
      }
    } 
  
  })

  return (
      //TODO Render cards dynamically based on results of a GET /categories api call. 
      //I have 4 hard coded components for layout purposes
   
      <CategoryContext.Provider value={{categories, setCategories}}>
    
      </CategoryContext.Provider>
    


    );
}
