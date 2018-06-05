import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addItem } from './actions/items';
import { setTextFilter } from './actions/filters';
import getVisibleItems from './selectors/items';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// store.dispatch(addItem({ description: 'Water bill', amount: 4500 }));
// store.dispatch(addItem({ description: 'Gas bill', createdAt: 1000 }));
// store.dispatch(addItem({ description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleItems = getVisibleItems(state.items, state.filters);
console.log(visibleItems);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);


ReactDOM.render(jsx, document.getElementById('app'));
