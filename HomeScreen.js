import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/TODO.png')} style={styles.image} />
      <Text style={styles.welcomeText}>Bem-vindo ao Afazeres!</Text>
      
      {/* Botão "Começar" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ToDoListScreen')}>
        <Text style={styles.buttonText}>Começar</Text>
      </TouchableOpacity>
      
      {/* Botão "Últimas Tarefas" */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CompletedTasksScreen')}>
        <Text style={styles.buttonText}>Últimas Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#367CFF', 
    padding: 15,
    borderRadius: 25, 
    width: '80%', 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
