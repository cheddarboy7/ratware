import { Tabs } from "expo-router";
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {Image, View} from 'react-native';
import { pinky } from "../../_layout";

export default function TabsNavigator(){

    return(
        <Tabs >
            <Tabs.Screen name='index' 
            options={{
            headerStyle:{
                height: 130,
            },
            headerTitle: () => (
                <Image
                style={{ width: 60, height: 60}}
                source={require('../../../../assets/cute2.png')}
                /> 
            ),
            tabBarIcon: ({color}) => (
                
                <MaterialIcons name="message" size={32} color={color}/>
                
            ),
            tabBarIconStyle:{
                marginBottom: -5
            },
            tabBarActiveTintColor: pinky,  
            tabBarLabel: 'Messages',
            tabBarLabelStyle: {
                marginBottom: -15
            }
        }} 
        />
            <Tabs.Screen name='profile' 
            options={{
            tabBarIcon: ({size, color}) => (
                <Fontisto name="user-secret" size={32} color={color} />
            ),
            tabBarIconStyle:{
                marginBottom: 0
            },
            tabBarActiveTintColor: pinky,  
            tabBarLabel: 'Profile',
            tabBarLabelStyle: {
                marginBottom: -15
            }
        }} 
        />
        </Tabs>
        
        )
}
