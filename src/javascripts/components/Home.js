import React from 'react';

export function Home(props) {
	return (
		<>
			<header class="jumbotron my-4 bg-light">
				<h1 class="display-3 text-center">Budgeteer</h1>
				<div class="row">
					<div class="col-6">
						<p>Graph 1</p>
					</div>
					<div class="col-6">
						<p>Graph 2</p>
					</div>
				</div>
			</header>
			<section id="home-info bg-light">
				<div class="row">
					<div class="col-1">
					</div>
					<div class="col-3 mx-3 mb-5">
						<a href="#"><h3 class="text-center text-secondary mb-5">Categories</h3></a>
						<div class="list-group text-center">
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Cras justo odio</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Dapibus ac facilisis in</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Morbi leo risus</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Porta ac consectetur ac</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Vestibulum at eros</a>
						</div>
					</div>
					<div class="col-7 mr-5 mb-5">
						<a href="#"><h3 class="text-center text-secondary mb-5">Recent Transactions</h3></a>
						<div class="list-group">
							<a href="#" class="list-group-item list-group-item-action b-border bg-light"> Cras justo odio</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Dapibus ac facilisis in</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Morbi leo risus</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Porta ac consectetur ac</a>
							<a href="#" class="list-group-item list-group-item-action b-border bg-light">Vestibulum at eros</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}