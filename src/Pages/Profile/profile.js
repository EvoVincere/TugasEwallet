import React from "react";
import { View,Text, Image, Button } from "react-native";
import { Profile } from "./../../../Assets/Images";




const ProfilePages = ({navigation}) => {
    
    return(
        <View>
            <View style={{backgroundColor:'blue',borderRadius:5,alignItems:'center'}}>
                <View>
                    <Image source={Profile} style={{width:80,height:80,alignSelf:'center',marginTop:10}}/>
                    <Text style={{color:'white', fontWeight:'500', fontSize:20,marginVertical:10}}>Muhammad Iqbaal Hibatullah</Text>
                </View>
                <View>
                    <Text style={{color:'white', fontWeight:'500', fontSize:20,marginVertical:5}}>08513621727</Text>
                </View>
            </View>
            <View style={{marginVertical:10 ,marginHorizontal:50,marginTop:20}}>
                <Button title="CHANGE PROFILE"/>
            </View>
            <View style={{marginVertical:10,marginHorizontal:50}}>
                <Button title="CHANGE PASSWORD"/>
            </View>
            <View style={{marginVertical:10,marginHorizontal:50}}>
                <Button title="LOGOUT"/>
            </View>
        </View>
    );
};

export default ProfilePages;