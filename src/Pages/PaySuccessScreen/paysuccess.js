import React from "react";
import { View,Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconTopUp } from "./../../../Assets/Images";



const PaySuccess = ({navigation}) => {
    
    return(
    <View style={{backgroundColor: 'white'}}>
        <Image source={IconTopUp} style={{position: 'relative', padding : 10, marginVertical: 30, marginHorizontal: 80,width: 100, height:100}}/>
        <View>
            <Text style={{color: 'black',fontSize:30,fontWeight:'500', marginHorizontal: 50}}>Payment Complete!</Text>
        </View>
        <View>
            <Text style={{color: 'black',fontSize:30,fontWeight:'300', marginHorizontal:50}}>Rp. 50.000</Text>
        </View>
        <View style={{marginHorizontal:40,marginTop: 8,backgroundColor: '#2C5FB8',flexDirection:'column', borderRadius:10}}>
            <View>
                <Text style={{marginHorizontal: 100,fontWeight:'500',alignSelf:'center',marginTop:10}}>Messi</Text>
            </View>
            <View>
                <Text style={{marginHorizontal: 100,fontWeight:'500'}}>15 Desember 2022</Text>
            </View>
            <View>
                <Text style={{marginHorizontal: 50,fontWeight:'500',alignSelf:'center',marginBottom:10}}>jl.cicadas no.22,Bandung</Text>
            </View>
            
        </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal:12,paddingVertical:11, alignSelf: 'center', borderRadius:2}}>
                <Button title="Finish" onPress={()=>navigation.navigate("HomeScreen")} />
            </View>
            
            
        </View>
    );
};

export default PaySuccess;