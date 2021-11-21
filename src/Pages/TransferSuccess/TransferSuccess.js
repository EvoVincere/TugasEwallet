import React from "react";
import { View,Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { IconTopUp } from "./../../../Assets/Images";



const TransferSuccess = ({navigation}) => {
    
    return(
    <View style={{backgroundColor: 'white'}}>
        <Image source={IconTopUp} style={{position: 'relative', padding : 10, marginVertical: 30, marginHorizontal: 80,width: 100, height:100}}/>
        <View>
            <Text style={{color: 'black',fontSize:30,fontWeight:'500', marginHorizontal: 50}}>Transfer Success</Text>
        </View>
        <View>
            <Text style={{color: 'black',fontSize:30,fontWeight:'300', marginHorizontal:50}}>Rp. 100.000</Text>
        </View>
        <View style={{marginHorizontal:40,marginTop: 8,backgroundColor: '#2C5FB8',flexDirection:'column', borderRadius:10}}>
            <View>
                <Text style={{marginHorizontal: 50,fontWeight:'500',alignSelf:'center',marginTop:10}}>12 November 2022</Text>
            </View>
            <View>
                <Text style={{marginHorizontal: 50,fontWeight:'500',alignSelf:'center',marginTop:10}}>Receiver: Stephen Curry</Text>
            </View>
            <View>
                <Text style={{marginHorizontal: 50,fontWeight:'bold',alignSelf:'center',marginBottom:10}}>082323xxxx</Text>
            </View>
            
        </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal:12,paddingVertical:11, alignSelf: 'center', borderRadius:2}}>
                <Button title="Finish" onPress={()=>navigation.navigate("HomeScreen")} />
            </View>
            
            
        </View>
    );
};

export default TransferSuccess;