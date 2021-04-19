import React, {useState, useEffect} from 'react';

export function Category(props) {
    const [category, setCategory] = useState()

    //retrieve category id from URL parameter
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let category_id = params.get('id');

    useEffect(() => {
        if(category_id) {
          if(!category) {
            fetch(`/api/v1/categories/one/${category_id}`, {
              credentials: "same-origin"
            })
             .then(response => response.text())
             .then(data => {
               const retrieved_category = JSON.parse(data);
               setCategory(retrieved_category);
               //console.log('Category: ' + retrieved_category);
             })
          }
        } 
      })


    if (!category){
        return (<span className="text-center">Loading data...</span>)
    } else {
        return (
            <>
                <section id="" className="bg-light my-5">
                    <h1 className="text-secondary text-center my-4">{ category[0].name }</h1>
                    <div className="row">
                        <div className="col-6">
                            <h4 className="my-3 text-center text-secondary">Label List</h4>
                            <ul className="ml-5 px-5">
                                <li className="mt-5 text-secondary">Label</li>
                                <li className="mt-5 text-secondary">Label</li>
                                <li className="mt-5 text-secondary">Label</li>
                                <li className="mt-5 text-secondary">Label</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <img></img>
                        </div>
                    </div>
                    <h3 className="text-center text-secondary mt-5">Transaction List</h3>
                    <div className="row my-3">
                        <div className="col-3">
                            <h5 className="text-center fw-bold my-3 text-secondary">Title</h5>
                            <ul>
                                <li className="mt-3 text-center text-secondary">Transaction</li>
                                <li className="mt-3 text-center text-secondary">Transaction</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h5 className="text-center fw-bold my-3 text-secondary">Notes</h5>
                            <ul>
                                <li className="mt-3 text-secondary">Notes</li>
                                <li className="mt-3 text-secondary">Notes</li>
                            </ul>
                        </div>
                        <div className="col-3">
                            <h5 className="mx-5 fw-bold my-3 text-secondary">Cost</h5>
                            <ul>
                                <li className="mt-3 text-secondary">$</li>
                                <li className="mt-3 text-secondary">$</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
}
}