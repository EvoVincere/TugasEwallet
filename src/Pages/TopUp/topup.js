import React from "react";
import { View,Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconTopUp } from "./../../../Assets/Images";



const TopUp = ({navigation}) => {
    
    return(
        <View style={{padding:10, borderColor: 'black',position: 'relative', flex:1}}>
            <Image source={IconTopUp} style={{position: 'relative', padding : 10, marginVertical: 30, marginHorizontal: 80,width: 100, height:100}}/>
            <View>
                <TextInput 
                    style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginHorizontal: 30, color: 'black'}}
                    placeholder="Nominal Top Up" placeholderTextColor= 'grey'/> 
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal:12,paddingVertical:11, alignSelf: 'center', borderRadius:2}}>
                <Button title="Submit" onPress={()=>navigation.replace("TopUpSuccess")} />
            </View>
            
            
        </View>
    );
};

export default TopUp;