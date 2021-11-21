import React from "react";
import { View,Text, Image, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {Atom} from './../../../Assets/Images'



const Login = ({navigation}) => {
    
    return(
        <View style={{padding:10, borderColor: 'black',position: 'relative', flex:1}}>
            <Image source={Atom} style={{position: 'relative', padding : 10, marginVertical: 30, marginHorizontal: 50,}}/>
            <View>
                <TextInput 
                    style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                    placeholder="Email" placeholderTextColor= 'grey'/> 
            </View>
            <View>
                <TextInput 
                    style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                    placeholder="Password" placeholderTextColor= 'grey'/>
            </View>
          
            <View style={{justifyContent: 'space-between', paddingHorizontal:12,paddingVertical:11, borderRadius:2, marginHorizontal: 10}}>
                <Button title="Login" onPress={()=>navigation.replace("HomeScreen")} />
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center', paddingHorizontal:12,paddingVertical:11, alignSelf: 'center', borderRadius:2}}>
                <Button title="Register" onPress={()=>navigation.navigate("Account Registration")} />
            </View>
            
            
        </View>
    );
};

export default Login;