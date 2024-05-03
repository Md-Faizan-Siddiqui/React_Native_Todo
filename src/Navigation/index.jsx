import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddTodo from '../Screens/AddTodo'
import { Add_Todo, Todo_List } from './Path'
import TodoList from '../Screens/TodoList'
import { Routes } from './Route'
const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {Routes.map((itm, ind) => {
                    return (
                        <Stack.Screen key={ind} name={itm.path} component={itm.component} />
                    )
                })

                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation