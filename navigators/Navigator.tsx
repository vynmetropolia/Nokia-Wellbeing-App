import * as React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../views/Home'
import ContactPage from '../views/ContactPage'

const Stack = createNativeStackNavigator()

function Navigator() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Contact Page" component={ContactPage} />
    </Stack.Navigator>
  </NavigationContainer>

}

export default Navigator