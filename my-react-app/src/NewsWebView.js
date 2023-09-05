import React from 'react';
import { WebView } from 'react-native-webview';

const WebPageScreen = () => {
  return (
    <WebView
      source={{ uri: 'https://example.com' }} // 웹 페이지 URL을 지정!
    />
  );
}

export default WebPageScreen;
