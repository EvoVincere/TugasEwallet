import * as React from 'react';
import { View, Text, Image, TouchableOpacity,Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { IconHome, Plus } from '../../../Assets/Images';
import { IconTransaction } from '../../../Assets/Images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Profile } from '../../../Assets/Images';
import { qrCode } from '../../../Assets/Images';
import { Transfer } from '../../../Assets/Images';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



const Tab = createBottomTabNavigator();
const HomeScreen =  ({navigation}) => {
    return(

      <View style={{flex:1}}>   
        <ScrollView style={{flex:1, backgroundColor: 'white'}}>
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 30}}>
            <View style={{position: 'relative', flex: 1}}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 18}}>Your Balance: </Text>
            </View>
            <View style={{flex: 1}}>
              <Button title="Profile" onPress={()=> navigation.navigate("ProfilePages")} color='#4982C1'/>
            </View>
          </View>
          <View style={{marginHorizontal: 17, flexDirection: 'row', paddingTop: 10}}>
            <View style={{position: 'relative', flex: 1}}>
              <Text style={{color: 'black', fontWeight: '400', fontSize: 18}}>Rp 5.000.000 </Text>
            </View>
          </View>
          {/*menu */}
          <View style={{marginHorizontal:17,marginTop: 8,backgroundColor: '#4982C1',flexDirection:'row', borderRadius:10}}>
            <View style={{flex:1, alignItems: 'center'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginTop:20}} source={Plus}/>
              <Button title="Top Up" onPress={()=> navigation.navigate("TopUp")} color='#4982C1'/>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginTop:20}} source={qrCode}/>
              <Button title="QR Code" onPress={()=> navigation.navigate("qrcode")} color='#4982C1'/>
            </View>
            <View style={{flex:1, alignItems: 'center'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginTop:20}} source={Transfer}/>
              <Button title="Transfer" onPress={()=> navigation.navigate("Transfer")} color='#4982C1'/>
            </View>    
          </View>
          <View style={{flex:1, marginHorizontal: 17, marginTop:50}}>
            <Text style={{color: 'black'}}>5 Latest Transaction</Text>
          </View>
          <View style={{marginHorizontal:17,marginTop: 8,backgroundColor: 'grey',flexDirection:'row', borderRadius:10,borderBottomColor: 'black'}}>
            <View style={{flex:0.5, alignItems: 'flex-start'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginVertical:20,marginLeft: 10}} source={Transfer}/>
            </View>
            <View style={{flex:1, alignItems: 'flex-start' ,marginVertical: 10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Rp 80.000</Text>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Transfer to 0821212125</Text>
            </View>
            <View style={{flex:1, alignSelf: 'stretch', marginTop:10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>30/12/2021</Text>
            </View>
          </View>
          <View style={{marginHorizontal:17,marginTop: 8,backgroundColor: 'grey',flexDirection:'row', borderRadius:10,borderBottomColor: 'black'}}>
            <View style={{flex:0.5, alignItems: 'flex-start'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginVertical:20,marginLeft: 10}} source={Transfer}/>
            </View>
            <View style={{flex:1, alignItems: 'flex-start' ,marginVertical: 10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Rp 50.000</Text>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Transfer to 0821617125</Text>
            </View>
            <View style={{flex:1, alignSelf: 'stretch', marginTop:10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>30/12/2021</Text>
            </View>
          </View>
          <View style={{marginHorizontal:17,marginTop: 8,backgroundColor: 'grey',flexDirection:'row', borderRadius:10,borderBottomColor: 'black'}}>
            <View style={{flex:0.5, alignItems: 'flex-start'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginVertical:20,marginLeft: 10}} source={Transfer}/>
            </View>
            <View style={{flex:1, alignItems: 'flex-start' ,marginVertical: 10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Rp 30.000</Text>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Transfer to 0821212125</Text>
            </View>
            <View style={{flex:1, alignSelf: 'stretch', marginTop:10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>30/12/2021</Text>
            </View>
          </View>
          <View style={{marginHorizontal:17,marginTop: 8,backgroundColor: 'grey',flexDirection:'row', borderRadius:10,borderBottomColor: 'black'}}>
            <View style={{flex:0.5, alignItems: 'flex-start'}}>
              <Image style={{width: 30, height:30, backgroundColor: 'white', borderRadius: 5,marginVertical:20,marginLeft: 10}} source={Transfer}/>
            </View>
            <View style={{flex:1, alignItems: 'flex-start' ,marginVertical: 10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Rp 20.000</Text>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>Transfer to 0821212125</Text>
            </View>
            <View style={{flex:1, alignSelf: 'stretch', marginTop:10}}>
              <Text style={{color: 'white', fontWeight: '400', fontSize: 15,alignContent:'center' }}>30/12/2021</Text>
            </View>
          </View>
          
        </ScrollView>
        {/*Bot Navigation */}
        
        <View style={{height:54, backgroundColor: 'white', flexDirection: 'row'}}>
          <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
            <View style={{width:26, height:26}}>
              <Image style={{width:26,height:26}} source={IconHome}/>
            </View>
            <Text style={{fontSize:10, color: '#545454', marginTop: 4, color:'#43AB4A'}}>Home</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
            <View style={{width:26, height:26}}>
            <Image style={{width:26, height:26}} source={IconTransaction}/>
            </View>
            <Text style={{fontSize:10, color: '#545454', marginTop: 4, color:'black'}}>Transaction History</Text>
          </View>
          <View style={{flex:1,alignItems:'center',justifyContent: 'center'}}>
            <View style={{width:26, height:26}}>
            <Image style={{width:26, height:26}} source={Profile}/>
            </View>
            <Text style={{fontSize:10, color: '#545454', marginTop: 4, color:'black'}}>Profile</Text>
          </View>
        </View> 
       
         {/* <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle:{
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 40,
              marginHorizontal: 20,
              height:60,
              borderRadius:10,
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset:{
                width: 10,
                height: 10
              }
            }
          }}>
            <Tab.Screen name={"Main"} component={HomeScreen} options={{
              tabBarIcon: ({focused}) =>(
                <View style={{position:'absolute', top:'50%'}}>
                  <FontAwesome5 name="home" size={20}></FontAwesome5>
                </View>
              )
            }}></Tab.Screen>
          </Tab.Navigator>
          */}
    </View>   
    );
  };

  
  export default HomeScreen;
   
  