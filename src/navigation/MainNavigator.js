import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PdfDescriptionPage from "../screens/PdfDescriptionPage";
import PdfViewPage from "../screens/PdfViewPage";


const Stack = createNativeStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Home" component={Home} options={{headerShown : false}} />
               <Stack.Screen name="PdfDesc" component={PdfDescriptionPage} />
               <Stack.Screen name="PdfView" component={PdfViewPage} />
            </Stack.Navigator> 
        </NavigationContainer>
    )   
}