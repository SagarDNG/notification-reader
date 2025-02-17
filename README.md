# 📢 Notification Reader App
### A React Native app (Expo) that listens for notifications and reads them aloud using Text-to-Speech (TTS). 🚀

## ✨ Features
#### ✅ Reads incoming notifications aloud 📢
#### ✅ Supports manual test notifications 🔔
#### ✅ Works on Android devices (Standalone APK required) 📱
#### ✅ Uses Expo-Notifications & Expo-Speech

## 🚀 Installation & Setup
### 1. Clone the repo
```
git clone https://github.com/SagarDNG/notification-reader.git
cd notification-reader
```

### 2. Install dependencies
```
npm install
```

### 3. Run the app
```
npx expo start
```

## 🔔 Testing Notifications
#### Manual Test: Press the "Test TTS" button in the app.
#### Automatic Trigger: Runs when the app starts (inside useEffect).

## 📦 Build APK for Full Functionality
```
eas build --profile preview --platform android
```
Install the APK on your phone to enable background notifications.


## 🛠️ Tech Stack
#### React Native (Expo)
#### Expo Notifications
#### Expo Speech (Text-to-Speech)
