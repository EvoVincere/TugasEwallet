import react from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DetailScreen = ({navigation}) =>{
    return(
      <View style={{flex:1,alignItems: 'center', justifyContent: 'center'}}>
        <Text>DetailScreen</Text>
        <Button title="go to Detail...again"
          onPress={()=> navigation.push("Detail")}/>
        <Button title="go to Home"
          onPress={()=> navigation.navigate("Home")}/>
        <Button title="go back"
          onPress={()=> navigation.goBack()}/>    
        <Button title="go to first screen"
          onPress={()=> navigation.popToTop()}/>  
      </View>
    );
  };

export default DetailScreen;  