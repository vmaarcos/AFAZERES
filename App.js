import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import ToDoListScreen from './ToDoListScreen';
import CompletedTasksScreen from './CompletedTasksScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Bem-vindo' }} 
        />
        <Stack.Screen 
          name="ToDoList" 
          component={ToDoListScreen} 
          options={{ title: 'Lista de Tarefas' }} 
        />
        <Stack.Screen 
          name="CompletedTasks" 
          component={CompletedTasksScreen} 
          options={{ title: 'Tarefas Concluídas' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
