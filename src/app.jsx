import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Link, Switch, Redirect} from 'react-router-dom';

//页面
import Home 		from 'page/home/index.jsx';
import Login 		from 'page/login/index.jsx';
import OrderList 	from 'page/order/index.jsx';
import ProductList    from 'page/product/index.jsx';
import ErrorPage    from 'page/error/index.jsx';
import UserList    from 'page/user/index.jsx';
//布局
import Layout from 'component/layout/index.jsx';

class APP extends React.Component{
	render(){
        let LayoutRouter = (
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/order/index" component={OrderList}/>
                    <Route path="/product" component={ProductList}/>
                    <Route path="/user/index" component={UserList}/>
                    <Redirect exact from="/order" to="/order/index"/>
                    <Redirect exact from="/user" to="/user/index"/>
                    <Route component={ErrorPage}/>
                </Switch>
            </Layout>
        );
        return (
            <Router>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" render={ props => LayoutRouter}/>
                </Switch>
            </Router>
        )
    }
	/*render(){
		return(
			<Router>
				<Layout>
				<Switch>
					<Route exact path="" component={Home} />
					<Redirect from="*" to="" />
				</Switch>
				</Layout>
			</Router>
		);
	}*/
}

ReactDOM.render(
	<APP />,
	document.getElementById('app')
);