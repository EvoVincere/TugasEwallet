import React, {useEffect} from 'react';
import { View,Text, Image, Button } from "react-native";
import { qrcodeScan } from "../../../Assets/Images";



const QRCodes = ({navigation}) => {
    useEffect(()=> {
        setTimeout(()=> {
            navigation.replace('QRpayConfirm');
        },2000)
    })
    
    return(
       <View style={{marginVertical: 150}}>
           <Image source={qrcodeScan}style={{width:400,height:400}}/>
       </View>
    );
};

export default QRCodes;