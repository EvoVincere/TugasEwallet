import React, {useEffect} from 'react';
import { View,Text, ImageBackground, StyleSheet, Image } from "react-native";
import {SplashBackground,Logo} from './../../../Assets/Images'



const Splash = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.replace('Login');
        },2000)
    })
    return(
        <ImageBackground source={SplashBackground} style={styles.background}>
            <Image source={Logo} style={styles.logo}/>
        </ImageBackground>    
    );
};

export default Splash;

const styles = StyleSheet.create({
    background : {
        flex :1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 222,
        height: 105
    }
    
});