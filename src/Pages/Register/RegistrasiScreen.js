import React from "react";
import { View,Text, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const Register = ({navigation}) => {
    return(
        <View>
            <View>
                <Text style={{color: 'black', marginLeft: 20,marginTop: 50}}>Masukkan Email</Text>
            </View>
            <View style={{flex: 1, marginVertical: 10, marginHorizontal: 20}}>
                <TextInput 
                style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                placeholder="Email" placeholderTextColor= 'grey'/>
            </View>

            <View>
                <Text style={{color: 'black', marginLeft: 20,marginTop: 50}}>Masukkan Password</Text>
            </View>
            <View style={{flex: 1, marginVertical: 10, marginHorizontal: 20}}>
                <TextInput 
                style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                placeholder="Password" placeholderTextColor= 'grey'/>
            </View>

            <View>
                <Text style={{color: 'black', marginLeft: 20,marginTop: 50}}>Masukkan Nama</Text>
            </View>
            <View style={{flex: 1, marginVertical: 10, marginHorizontal: 20}}>
                <TextInput 
                style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                placeholder="Nama" placeholderTextColor= 'grey'/>
            </View>

            <View>
                <Text style={{color: 'black', marginLeft: 20,marginTop: 50}}>Masukkan No Handphone</Text>
            </View>
            <View style={{flex: 1, marginVertical: 10, marginHorizontal: 20}}>
                <TextInput 
                style={{borderWidth: 2,borderColor:'#E8E8E8', borderRadius:10, height:50, fontSize: 13, paddingLeft:20, paddingRight:10, backgroundColor: 'white', marginRight: 10, color: 'black'}}
                placeholder="NO. Handphone" placeholderTextColor= 'grey'/>
            </View>

        <View style={{position: 'relative', marginTop: 50, paddingTop: 20, alignContent: 'center', marginHorizontal: 70}}>
            <Button title="Submit" onPress={()=> navigation.navigate("Login")}/>
        </View>

        </View>
    );
};

export default Register;