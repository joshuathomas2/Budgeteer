import React from 'react';

export function CategoriesList(props) {
    return (
        <>
            <section id="categories" className="bg-light my-5">
                <div className="row">
                    <div className="col-6"><a href="/category">
                        <h3 className="text-secondary my-3 text-center">Category -</h3>
                        <img className="text-center"></img>
                        <p className="text-secondary text-center mb-0 pb-0">Planned: </p><br></br>
                        <p className="text-secondary text-center mt-0 pt-0">Received: </p><br></br>
                    </a></div>
                </div>
            </section>
        </>
    )
}