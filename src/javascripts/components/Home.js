import React, { useEffect, useState } from 'react';
import {HomeCategoryListItem} from './HomeCategoryListItem'
import {HomeTransactionListItem} from './HomeTransactionListItem'
import { useCookies } from 'react-cookie'

export function Home(props) {
  const [categories, setCategories] = useState()
  const [cookies, setCookie, removeCookie] = useCookies(['token'])
  const [userID, setUserID] = useState()
  const [transactions, setTransactions] = useState()

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
        fetch(`/api/v1/categories/user/${userID}`, {
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

  useEffect(() => {
    if(userID) {
      if(!transactions) {
        fetch(`/api/v1/transactions/user/${userID}`, {
          credentials: "same-origin"
        })
         .then(response => response.text())
         .then(data => {
           const retrieved_transactions = JSON.parse(data);
           setTransactions(retrieved_transactions);
         })
      }
    } 
  })	

  if (!categories || !transactions){
    return (<span className="text-center">Loading data...</span>)
  } else {
	//create a new array equal to transactions but only slice off the most recent 5 (last five items)
	return (
		<>
			<header className="jumbotron my-4 bg-light">
				<h1 className="display-3 text-secondary text-center">Welcome, User</h1>
				<div className="row">
					<div className="col-6">
						<p>Graph 1</p>
					</div>
					<div className="col-6">
						<p>Graph 2</p>
					</div>
				</div>
			</header>
			<section id="home-info" className="bg-light mb-5">
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-3 mx-3 mb-5">
						<a href="#"><h3 className="text-center text-secondary mb-5">Categories</h3></a>
						<div className="list-group text-center">
						{
     					 	categories.map(c => {
        					return <HomeCategoryListItem key={c._id} category={c}/>
      						})
    					}
						</div>
					</div>
					<div className="col-7 mr-5 mb-5">
						<a href="#"><h3 className="text-center text-secondary mb-5">Recent Transactions</h3></a>
						<div className="list-group">
							{
								transactions.map(t => {
								return <HomeTransactionListItem key={t._id} transaction={t}/>
								})
							}
						</div>
					</div>
				</div>
			</section>
		</>
	)
					}
}