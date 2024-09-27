import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import {ActivityIndicator, ImageBackground} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Channel as ChannelType} from 'stream-chat';
import { Channel, MessageInput, MessageList, ThemeProvider, useChannelContext, useChatContext } from 'stream-chat-expo';
import { pinky } from '../../_layout';

export const theme = {
    messageList: {
      container: {
        backgroundColor: 'transparent',
      }  
    },
    colors:{
      white: '#1a1a1a',
    },
    messageInput:{

    },
    messageSimple: {
      content: {
        containerInner: {
          backgroundColor: pinky,
          borderColor: 'black',
         },  
      },
      textContainer:  {
        color: '#ffffff',
      }
    }
}  

export default function ChannelScreen(){
    
    const [channel, setChannel] = useState<ChannelType | null>(null);
    const { id } = useLocalSearchParams<{ id: string }>();
    
    const {client} = useChatContext();

    useEffect(() => {
        const fetchChannel = async () => {
          const channels = await client.queryChannels({ id });
          setChannel(channels[0]);
          console.log(channels)
        };
    
        fetchChannel();
      }, [id]);

    if(!channel){
        return <ActivityIndicator />
    }

    return(
        <ThemeProvider style={theme}>
        <Channel channel={channel}>
        <ImageBackground
        style={{ flex: 1 }}
        source={
            require('../../../../assets/background.jpg')
        }>
            <MessageList />
            <SafeAreaView edges={['bottom']}>
            <MessageInput/>
            </SafeAreaView>
        </ImageBackground>
        </Channel>
       
        </ThemeProvider>
    )
}