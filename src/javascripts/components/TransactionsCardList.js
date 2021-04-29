import React, { useState, createContext, useEffect} from "react";
import {TransactionCard} from './TransactionCard'
import { useCookies } from 'react-cookie'
import { set } from "mongoose";
import { Transaction } from "../models/Transaction";
import { LoadingSpinner } from "./LoadingSpinner"

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
        //console.log(retrieved_id);
      })
    }
  })

  useEffect(() => {
    if(userID) {
      if(!categories) {
        fetch(`/api/v1/categories/user/${userID.id}`, {
          credentials: "same-origin"
        })
         .then(response => response.text())
         .then(data => {
           const retrieved_categories = JSON.parse(data);
           setCategories(retrieved_categories);
           //console.log('Categories: ' + retrieved_categories);
         })
      }
    } 
  })

  if (!categories){
    return (<loadingSpinner/>)
  } else {
  return (
    <div className="container">
    {
      categories.map(c => {
        return <TransactionCard key={c._id} category={c}/>
      })
    } </div>
    );
  }
}
