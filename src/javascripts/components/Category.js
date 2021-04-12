import React from 'react';

export function Category(props) {
    return (
        <>
            <section id="" class="bg-light my-5">
                <h1 class="text-secondary text-center my-4">Category Name</h1>
                <div class="row">
                    <div class="col-6">
                        <h4 class="my-3 text-center text-secondary">Label List</h4>
                        <ul class="ml-5 px-5">
                            <li class="mt-5 text-secondary">Label</li>
                            <li class="mt-5 text-secondary">Label</li>
                            <li class="mt-5 text-secondary">Label</li>
                            <li class="mt-5 text-secondary">Label</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <img></img>
                    </div>
                </div>
                <h3 class="text-center text-secondary mt-5">Transaction List</h3>
                <div class="row my-3">
                    <div class="col-3">
                        <h5 class="text-center fw-bold my-3 text-secondary">Title</h5>
                        <ul>
                            <li class="mt-3 text-center text-secondary">Transaction</li>
                            <li class="mt-3 text-center text-secondary">Transaction</li>
                        </ul>
                    </div>
                    <div class="col-6">
                        <h5 class="text-center fw-bold my-3 text-secondary">Notes</h5>
                        <ul>
                            <li class="mt-3 text-secondary">Notes</li>
                            <li class="mt-3 text-secondary">Notes</li>
                        </ul>
                    </div>
                    <div class="col-3">
                        <h5 class="mx-5 fw-bold my-3 text-secondary">Cost</h5>
                        <ul>
                            <li class="mt-3 text-secondary">$</li>
                            <li class="mt-3 text-secondary">$</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}