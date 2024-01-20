import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import History from '../screens/Game/History';
import Home from '../screens/Game/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const GameTabs=  () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'History') {
          iconName = focused ? 'settings' : 'settings-outline';
        }
        return <Ionicons name={iconName} size={size} color={'#39B68D'} />;
      },
    })}
    >
      <Tab.Screen name="Home" component={Home} 
          options={{
            headerStyle:{
              backgroundColor:"#000"
            },
            headerTitle:"Game Play",
            headerTitleAlign:"center",
            headerTintColor:"#39B68D",
          }}
      />
      <Tab.Screen name="History" component={History}
           options={{
            headerStyle:{
              backgroundColor:"#000"
            },
            headerTitle:"History",
            headerTitleAlign:"center",
            headerTintColor:"#39B68D",
          }}
      />
    </Tab.Navigator>
  );
}