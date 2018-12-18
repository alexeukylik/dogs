import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/app/App';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers/index'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  Loading  from './Component/loading/Loading';
import  NotFound  from './Component/notFound/NotFound';

const composedEnhancers = compose(applyMiddleware(reduxThunk));
const store = createStore(reducers, composedEnhancers);

const Detail = lazy(() => import('./Component/detail/Detail'));
const Basket = lazy(() => import('./Component/basket/Basket'));

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/detail/:id"  component={Detail}/>
                <Route path="/basket" component={Basket} />
                <Route path="*" component={NotFound} />        
            </Switch>
            </Suspense>

        </Router>
    </Provider>,
document.getElementById('root'));



