'use strict';

var React = require('react-native');

var {StyleSheet} = React;

module.exports = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#662517',
        marginTop: 10,
        padding: 8,
        color: '#662517',
        backgroundColor: '#fff',
        alignItems: 'center',
        width: '70%'
    },

    button_text : {
        fontSize : 20
    },
});
