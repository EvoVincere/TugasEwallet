import React from "react";
import { View,Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconTopUp } from "./../../../Assets/Images";



const QrPayConfirm = ({navigation}) => {
    
    return(
        <View style={{backgroundColor: 'white'}}>
        <Image source={IconTopUp} style={{position: 'relative', padding : 10, marginVertical: 30, marginHorizontal: 80,width: 100, height:100}}/>
        <View style={{marginHorizontal:40,marginTop: 8,backgroundColor: '#2C5FB8',flexDirection:'column', borderRadius:10}}>
            <View>
                <View>
                    <Text style={{color: 'white',fontSize:25,fontWeight:'bold', marginHorizontal: 50}}>Payment To:</Text>
                </View>
                <View>
                    <Text style={{color: 'white',fontSize:17,fontWeight:'500', marginHorizontal:100,marginVertical:20}}>Messi</Text>
                </View>
                <View>
                    <Text style={{color: 'white',fontSize:15,fontWeight:'300', marginHorizontal:50,marginBottom:10}}>jl.cicadas no.22,Bandung</Text>
                </View>
                
            </View> 
        </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal:12,paddingVertical:11, alignSelf: 'center', borderRadius:2}}>
                <Button title="Submit" onPress={()=>navigation.replace("QRpaySuccess")} />
            </View>
        </View>
    );
};

export default QrPayConfirm;