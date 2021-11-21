import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Splash, Login,Register,Transaction, TopUp, TopUpSuccess, QRCodes, QrPayConfirm, QrPaySuccess, Transfer, TransferConfirm, TransferSuccess, ProfilePages} from "../Pages";
import HomeScreen from "../Pages/HomeScreen/HomeScreen";


const Stack= createStackNavigator();

const Router = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{title: ''}} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Account Registration" component={Register} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="Transaction" component={Transaction}/>
            <Stack.Screen name="TopUp" component={TopUp}/>
            <Stack.Screen name="TopUpSuccess" component={TopUpSuccess}/>
            <Stack.Screen name="qrcode" component={QRCodes} options={{title:'QR Payment'}}/>
            <Stack.Screen name="QRpayConfirm" component={QrPayConfirm} options={{title:'Payment Confirmation'}}/>
            <Stack.Screen name="QRpaySuccess" component={QrPaySuccess} options={{title:''}}/>
            <Stack.Screen name="Transfer" component={Transfer} />
            <Stack.Screen name="TransferConfirm" component={TransferConfirm} options={{title:'Transfer Confirm'}} />
            <Stack.Screen name="TransferSuccess" component={TransferSuccess} options={{title:'Transfer Success'}} />
            <Stack.Screen name="ProfilePages" component={ProfilePages} options={{title:'Profile'}}/>
        </Stack.Navigator>
    );
}

export default Router;