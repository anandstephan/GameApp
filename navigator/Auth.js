import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
const Stack = createStackNavigator();
const Auth = () =>{
return  <Stack.Navigator>
           <Stack.Screen name="Login" component={Login}
      options={{
        headerShown:false
      }}
      />
    </Stack.Navigator>
}

export default Auth