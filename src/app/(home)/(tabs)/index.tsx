import { Link, Redirect, router, Stack } from 'expo-router';
import { ChannelList, ThemeProvider } from 'stream-chat-expo';
import { useAuth } from '../../../providers/AuthProvider';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ImageBackground } from 'react-native'; ;


export const theme = {
    channelListMessenger: {
      flatListContent: {
        backgroundColor: '#1a1a1a',
     }
    },
     colors: {
      white_snow: '#1a1a1a',
      black: '#ffffff',
      white: '#1a1a1a',
      grey: '#7a7a7a',
      grey_whisper: '#343434',
      grey_gainsboro: '#2d2f2f',
      primary: '#005fff',
      accent_blue: '#005fff',
      accent_green: '#20e070',
      accent_red: '#ff3742',
      bg_gradient_end: '#101418',
      bg_gradient_start: '#070a0d',
    },   
    channelPreview:{
      contentContainer:{
            backgroundColor: '#1a1a1a'
        }
      }
    }


export default function MainTabScreen(){

    const {user} = useAuth();

    return(
        <>
        <Redirect href={"/(home)/call"} />
        <ThemeProvider style={theme}>
        <Stack.Screen 
            options={{headerRight: () => (
            <Link href={'/(home)/users'} asChild>
            <AntDesign name="adduser" size={25} color="gray" 
            style={{marginHorizontal: 15}}/>
            </Link>
        )}}
        />
        
        <ImageBackground
        style={{ flex: 1 }}
        source={
            require('../../../../assets/background.jpg')
        }>
        <ChannelList
        filters={{members: {$in: [user.id]}}} 
        onSelect={(channel) => router.push('/channel/${channel.cid}')}
        />
        </ImageBackground>
        </ThemeProvider>
        </>
        
    )
}