import React from 'react';
import {Link} from 'react-router-dom';

import PageTitle    from 'component/page-title/index.jsx';
import Pagination 	from 'util/pagination/index.jsx';
class UserList extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
            <div id="page-wrapper">
                <PageTitle title="用户列表" />
                <div className="row">
                    <div className="col-md-12">
						<table className="table table-striped">
							<thead>
								<th>ID</th>
								<th>ID</th>
								<th>ID</th>
							</thead>
							<tbody>
							<tr>
								<td>1</td>
								<td>2</td>
								<td>3</td>
							</tr>
							</tbody>
						</table>
                    </div>
                </div>
                <Pagination current={11} total={200} onChange={(pageNum) => {console.log(pageNum);}}/>
            </div>
		);
	}
}

export default UserList;