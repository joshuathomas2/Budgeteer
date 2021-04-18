import React, { useEffect, useState } from 'react';
import {HomeCategoryListItem} from './HomeCategoryListItem'
import { useCookies } from 'react-cookie'

export function Home(props) {
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
        fetch(`/api/v1/categories/user/${userID}`, {
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
    return (<span className="text-center">Loading data...</span>)
  } else {
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
							<a href="#" className="list-group-item list-group-item-action b-border bg-light"> Cras justo odio</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Dapibus ac facilisis in</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Morbi leo risus</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Porta ac consectetur ac</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Vestibulum at eros</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
					}
}