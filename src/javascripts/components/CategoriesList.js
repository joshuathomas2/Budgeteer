import React from 'react';

export function CategoriesList(props) {
    return (
        <>
            <section id="categories" class="bg-light my-5">
                <div class="row">
                    <div class="col-6"><a href="/category">
                        <h3 class="text-secondary my-3 text-center">Category -</h3>
                        <img class="text-center"></img>
                        <p class="text-secondary text-center mb-0 pb-0">Planned: </p><br></br>
                        <p class="text-secondary text-center mt-0 pt-0">Received: </p><br></br>
                    </a></div>
                </div>
            </section>
        </>
    )
}