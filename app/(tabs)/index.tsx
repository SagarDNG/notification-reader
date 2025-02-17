import React, { useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
import * as Speech from 'expo-speech';

// Request notification permissions (for Android)
async function requestPermissions() {
  const { status } = await Notifications.getPermissionsAsync();
  if (status !== 'granted') {
    await Notifications.requestPermissionsAsync();
  }
}

export default function HomeScreen() {
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
    <View style={styles.container}>
      <Text style={styles.title}>Notification Reader</Text>
      <Button title="Test TTS" onPress={() => Speech.speak('This is a test notification')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
