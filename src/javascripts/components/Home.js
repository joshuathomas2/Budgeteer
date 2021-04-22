import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie'

export function HomeCategoryListItem(props) {
  
  const c = props.category;
 
  if (!c) {
    return <tr><td className="text-center">Loading data...</td></tr>
  } else {
    return (
        <a href={ '/category?id=' + c._id  } className="list-group-item list-group-item-action b-border bg-light">{ c.name }</a> 
    );

  }
  }
  export function HomeTransactionListItem(props) {
  
    const t = props.transaction;
   
    if (!t) {
      return <tr><td className="text-center">Loading data...</td></tr>
    } else {
      return (
          <a href={ '/transactions' } className="list-group-item list-group-item-action b-border bg-light">{ t.title }</a> 
      );
  
    }
    }
    
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
        fetch(`/api/v1/categories/user/${userID.id}`, {
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
        fetch(`/api/v1/transactions/user/${userID.id}`, {
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
	const lastFive = transactions.slice(-5);
	return (
		<>
			<header className="jumbotron my-4 bg-light">
				<h1 className="display-3 text-secondary text-center">Welcome, {userID.username}!</h1>
				<div className="row">
					{/* <div className="col-6">
						<p>Graph 1</p>
					</div>
					<div className="col-6">
						<p>Graph 2</p>
					</div> */}
				</div>
			</header>
			<section id="home-info" className="bg-light mb-3">
				<div className="row">
					<div className="col-1">
					</div>
					<div className="col-lg-3 col-sm-12 mb-5">
						<a href="#"><h3 className="text-center text-secondary mb-3">Categories</h3></a>
						<div className="list-group text-center p-3">
						{
     					 	categories.map(c => {
        					return <HomeCategoryListItem key={c._id} category={c}/>
      						})
    					}
						</div>
					</div>
					<div className="col-lg-7 col-sm-12 mb-5">
						<a href="#"><h3 className="text-center text-secondary mb-3">Recent Transactions</h3></a>
						<div className="list-group p-3">
							{
								lastFive.map(t => {
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