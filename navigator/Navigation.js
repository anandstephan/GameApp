import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/auth/Login';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { getUserDetail } from '../storage/storage';
import { GameTabs } from './Game';
const Stack = createStackNavigator();

const  Navigation = () => {
  const navigation = useNavigation()
  const [initialRouteName,setInitialRouteName] = useState('Login')
  
  const focused = useIsFocused()
  if(focused){

  }
  useEffect(()=>{
    async function getDetail(){
      const res = await getUserDetail()
      console.log("hi,",res)
      setInitialRouteName('GameStack')
    }
    getDetail()
  },[])

  return (
    <Stack.Navigator
    initialRouteName={initialRouteName}
    >
      <Stack.Screen name="Login" component={Login}
      options={{
        headerShown:false
      }}
      />
      <Stack.Screen name="GameStack" component={GameTabs}
         options={{
          headerShown:false
        }}
      />
    </Stack.Navigator>
  );
}

export default Navigation