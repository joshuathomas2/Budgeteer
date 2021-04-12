import React from 'react';

export function Home(props) {
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
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Cras justo odio</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Dapibus ac facilisis in</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Morbi leo risus</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Porta ac consectetur ac</a>
							<a href="#" className="list-group-item list-group-item-action b-border bg-light">Vestibulum at eros</a>
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