import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fetch from './Fetch';
import HomeScreenA from './HomeScreenA';
import Peta from './Peta';

const Tab = createBottomTabNavigator();

const BottomTab = () =>{
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="HomeA" 
      component={HomeScreenA} 
      options={{
        headerShown: false

      }}
      />
      <Tab.Screen 
      name="Peta" 
      component={Peta} 
      options={{
        headerShown: false

      }}
      />
    </Tab.Navigator>
  );
} 
export default BottomTab
