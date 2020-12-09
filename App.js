import React, {Component} from 'react';

import {createStore} from "redux";
import {Provider} from "react-redux";
import Page from "./Page";

const initialState = {
    durum: 'Ersin Kalafat - Akinon Javascript Challange'
};

const reducer = (state = initialState, action) => {
    if (action.type === 'setDurum') {
        return Object.assign({}, state, {durum: 'İşlem alındı : ' + action.payload});
    }
    return state;
};

const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>

                <Page/>

            </Provider>
        );
    }
}
