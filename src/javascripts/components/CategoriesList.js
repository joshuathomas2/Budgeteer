import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie'
import { CategoriesListItem } from './CategoriesListItem';

export function CategoriesList(props) {
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

  if (!categories){
    return (<span className="text-center">Loading data...</span>)
  } else {
    return (
      <section id="categories" className="bg-light my-5">
      <div className="row">
        {categories.map((c) => {
          return <CategoriesListItem key={c._id} category={c} />;
        })}
      </div>
      </section>
    );
}
}