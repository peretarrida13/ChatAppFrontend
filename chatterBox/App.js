import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from './screens/LogoScreen/LogoScreen';
import SignIn from './screens/SignIn/SignIn';
import ChatList from './screens/ChatList/ChatList';
import NewChat from './screens/NewChat/NewChat';
import Chat from './screens/Chat/Chat';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animationEnabled: false }}>
        <Stack.Screen 
          name="LogoScreen" 
          component={LogoScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen 
          name="SignIn" 
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="ChatList" 
          component={ChatList} 
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name="NewChat" 
          component={NewChat} 
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Chat"
          component={Chat}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}