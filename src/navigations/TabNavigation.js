import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomIconData } from '../datas/BottomIconData';
import TabIcon from '../ui/TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {

  console.log( Tab )
  
  return (
    <Tab.Navigator
      initialRouteName = "Home"
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { backgroundColor: '#ffb71b', borderTop: 'none', paddingTop: 14, paddingBottom: 14, boxSizing: 'border-box', height: 70 },
      })}
    >
      {
        BottomIconData.map( data => (
          <Tab.Screen 
            key={data.id}
            name = {data.name} 
            component = {data.component} 
            options = {{
              tabBarIcon: ( props ) => TabIcon({ ...props, name: data.icon })
            }}
          />
        ))
      }
    </Tab.Navigator>
  );
}

export default TabNavigation;
