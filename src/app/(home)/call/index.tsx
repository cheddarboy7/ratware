import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
  } from '@stream-io/video-react-native-sdk';
  import { useEffect, useState } from 'react';
  
  const apiKey = process.env.EXPO_PUBLIC_STREAM_API_KEY;
  const userId = '9ea65cae-88b0-4443-8914-84293140dde5';
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiOWVhNjVjYWUtODhiMC00NDQzLTg5MTQtODQyOTMxNDBkZGU1In0.ngIuXrn4J6takUJj-n9yQsFShsF1gv_OQ-ND9KUJ8BA';
  const callId = 'my-call-id';
  const user: User = { id: userId };
  
  const client = new StreamVideoClient({ apiKey, user, token });
  const call = client.call('default', callId);
  call.join({ create: true });
  
  export default function CallScreen() {
    return (
      <StreamVideo client={client}>
        <StreamCall call={call}>{/* Your UI */}</StreamCall>
      </StreamVideo>
    );
  }
