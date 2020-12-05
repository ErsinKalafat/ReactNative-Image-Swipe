import {StatusBar} from 'expo-status-bar';
import React , {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createStore} from "redux";
import {Provider} from "react-redux"

const initialState = {
    durum: 'İlk Değer'
};

const reducer = (state = initialState, action) => {
    if (action.type === 'setDurum') {
        return Object.assign({},state, {durum: 'yenilenenDeğer'});
    }
    return state;
};

const store = createStore(reducer);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
              <View style={styles.container}>
                <Text>Merhaba Akinon!</Text>
                <StatusBar style="auto"/>
              </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
