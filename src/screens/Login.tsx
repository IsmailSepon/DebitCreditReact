import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Button,
  Pressable,
  Alert,
  ImageBackground,
} from 'react-native';

export default function Login() {
  return (
    <ImageBackground
      source={require('../assets/bg.png')}
      imageStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
      }}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/image.jpeg')}
          style={styles.image}
          alt="Login Image"
        />
        <Text>Login Page</Text>
        <Text>This is the login page</Text>
        <Button title="Login with Google" />

        <Pressable
          style={styles.loginButton}
          onPress={() => console.log('Login pressed')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </Pressable>

        <Button
          title="Login"
          color="#007AFF"
          onPress={() => Alert.alert('Login', 'Button pressed!')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },

  image: {
    width: 200,
    height: 200,
  },

  loginButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },

  loginButtonText: {
    color: 'white',
  },
});
