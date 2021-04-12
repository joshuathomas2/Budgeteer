import React, { useState, createContext, useEffect} from "react";
import {TransactionCard} from './TransactionCard'
import { useCookies } from 'react-cookie'
import { set } from "mongoose";


export const CategoryContext = createContext() 

export function TransactionsCardList(props) {
  const [categories, setCategories] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [userID, setUserID] = useState()

  useEffect(() => {
    if (!userID) {
      fetch('/api/v1/users/getCurrentUser', {
        credentials: "same-origin"
      })
      .then(response => response.text())
      .then(data => {
        const retrieved_id = JSON.parse(data);
        setUserID(retrieved_id);
        console.log(retrieved_id);
      })
    }
  })

  useEffect(() => {
    if(userID) {
      if(!categories) {
        fetch(`/api/v1/categories/${userID}`, {
          credentials: "same-origin"
        })
         .then(response => response.text())
         .then(data => {
           const retrieved_categories = data;
           setCategories(retrieved_categories);
           console.log('Categories: ' + retrieved_categories);
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
