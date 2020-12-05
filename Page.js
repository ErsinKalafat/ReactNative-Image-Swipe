import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
var Styles = require('./styles');

import {connect} from 'react-redux';

class Page extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Text>Merhaba Akinon!</Text>
                <Text>{this.props.durum}</Text>
                <TouchableOpacity style={Styles.button} onPress={() => this.props.degistir()  } >
                    <Text style={Styles.button_text}> Slider Başlat </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        durum : state.durum
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        degistir : () => dispatch({
            type:'setDurum', payload:'Slider Başlatıldı'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
