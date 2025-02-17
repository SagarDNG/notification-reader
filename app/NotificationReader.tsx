import React, { useEffect } from 'react';
import { Text, View, Button, Platform } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Speech from 'expo-speech';

// Request notification permissions (for Android)
async function requestPermissions() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
}

export default function App() {
  useEffect(() => {
    requestPermissions();

    // Listen for incoming notifications
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      const title = notification.request.content.title || 'New Notification';
      const body = notification.request.content.body || '';
      
      // Read the notification out loud
      Speech.speak(`${title}: ${body}`, {
        rate: 1.0,
        pitch: 1.0,
        language: 'en'
      });
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notification Reader</Text>
      <Button title="Test TTS" onPress={() => Speech.speak('This is a test notification')} />
    </View>
  );
}
