import React, { useState, createContext, useEffect} from "react";
import {TransactionCard} from './TransactionCard'
import { useCookies } from 'react-cookie'
import { set } from "mongoose";
import { Transaction } from "../models/Transaction";


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
           const retrieved_categories = JSON.parse(data);
           setCategories(retrieved_categories);
         })
      }
    } 
  })

  if (!categories){
    return (<span>loading...</span>)
  } else {   
  return (
    <div>
      { 
         categories.map(c => {
          return <TransactionCard key={c.id} project={c}/>
        })
      }
    </div>
    );
  }
}
