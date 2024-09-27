import { Slot } from "expo-router";
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AuthProvider from "../providers/AuthProvider";
import {ThemeProvider,DarkTheme } from "@react-navigation/native";

//Define global providers
export const pinky = '#ffa3e3';

export default function RootLayout(){

    return (
        <ThemeProvider value={DarkTheme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
        <AuthProvider>
        <Slot/>
        </AuthProvider>
        </GestureHandlerRootView>
        </ThemeProvider>
        
)}

