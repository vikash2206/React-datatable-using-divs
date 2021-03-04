import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./pagination.css";
class Pagination extends Component {
	render(){
    return(
        <div>
					<div className="pagination">
						<Link>&laquo;</Link>
						<Link to="" className="active">1</Link>
						<Link to="/medium" className="active">2</Link>
						<Link to="/large" className="active">3</Link>
            <Link to="/large" className="active">4</Link>
						<Link>&raquo;</Link>
					</div>
				</div>
    )
	}
}

export default Pagination;
