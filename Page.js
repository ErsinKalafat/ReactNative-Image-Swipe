import React, {Component} from 'react';
import {Animated, Text, View, TouchableOpacity, Image, StyleSheet, Dimensions, PanResponder} from 'react-native';
import {connect} from 'react-redux';
import {PanGestureHandler, State} from "react-native-gesture-handler"
import {add, clockRunning, cond, debug, divide, eq, floor, not, set, useCode} from "react-native-reanimated";
import {snapPoint, timing, useClock, usePanGestureHandler, useValue} from "react-native-redash/lib/module/v1";


const {width, height} = Dimensions.get("window");

var Styles = require('./styles');

const api1 = [
    { url: 'https://via.placeholder.com/800x600/BD463C' },
    { url: 'https://via.placeholder.com/800x600/7A2E27' },
    { url: 'https://via.placeholder.com/800x600/FA5E50' },
    { url: 'https://via.placeholder.com/800x600/3B1613' },
    { url: 'https://via.placeholder.com/800x600/E05548' },
];
const api2 = {
    images: [
        { link: 'https://via.placeholder.com/600x1000/468DBD' },
        { link: 'https://via.placeholder.com/600x1000/2D5C7A' },
        { link: 'https://via.placeholder.com/600x1000/5CBBFA' },
        { link: 'https://via.placeholder.com/600x1000/162C3B' },
        { link: 'https://via.placeholder.com/600x1000/53A8E0' },
    ]
};
const api3 = {
    "swipers": [
        {
            "swiper": {
                "image_set": [
                    { image_url: 'https://via.placeholder.com/800x800/8EBD37' },
                    { image_url: 'https://via.placeholder.com/800x800/5C7A23' },
                    { image_url: 'https://via.placeholder.com/800x800/BCFA48' },
                    { image_url: 'https://via.placeholder.com/800x800/2C3B11' },
                    { image_url: 'https://via.placeholder.com/800x800/A9E042' },
                ]
            }
        }
    ]
};


const inStyle = StyleSheet.create({
    resimler: {
        marginTop: 10,
        width: width * api1.length,
        height:170,
        flexDirection: "row",
    },

    resim: {
        width,
        height: '30%',
        overflow: "hidden"
    },

    image: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined
    }
});

class Page extends Component {
    pan = new Animated.ValueXY();
    panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            this.pan.setOffset({
                x: this.pan.x._value,
                y: this.pan.y._value
            });
        },
        onPanResponderMove: Animated.event([
            null,
            {dx: this.pan.x, dy: this.pan.y}
        ]),
        onPanResponderRelease: () => {
            this.pan.flattenOffset();
        }
    });

    render() {

        return (
            <View style={Styles.container}>
                <Text>Merhaba Akinon!</Text>
                <Animated.View style={{transform: [{translateX: this.pan.x}]}} {...this.panResponder.panHandlers} >
                    <Animated.View style={inStyle.resimler}>
                        {api1.map((resim, url) => (
                            <View key={url} style={inStyle.resim}>
                                <Image style={inStyle.image} source={{uri: resim.url}}/>
                            </View>
                        ))}
                    </Animated.View>

                    <Animated.View style={inStyle.resimler}>
                        {api2.images.map((resim, url) => (
                            <View key={url} style={inStyle.resim}>
                                <Image style={inStyle.image} source={{uri: resim.link}}/>
                            </View>
                        ))}
                    </Animated.View>

                    <Animated.View style={inStyle.resimler}>
                        {api3.swipers.map((resim, url) => (
                            resim.swiper.image_set.map((resim, url) => (
                                <View key={url} style={inStyle.resim}>
                                    <Image style={inStyle.image} source={{uri: resim.image_url}}/>
                                </View>
                            ))
                        ))}
                    </Animated.View>
                </Animated.View>


                <Text>{this.props.durum}</Text>
                <TouchableOpacity style={Styles.button} onPress={() => this.props.degistir()}>
                    <Text style={Styles.button_text}> Redux mapDispatchToProps </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        durum: state.durum
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        degistir: () => dispatch({
            type: 'setDurum', payload: 'Redux payload ataması başarılı!'
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
