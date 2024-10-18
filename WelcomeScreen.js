import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/TODO.png')} 
        style={styles.image}
      />
      <Text style={styles.welcomeText}>Bem-vindo ao AFAZERES</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('ToDoList')}
      >
        <Text style={styles.buttonText}>Ir para Lista de Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#f4f4f4' 
  },
  image: { 
    width: 200, 
    height: 200, 
    marginBottom: 20 
  },
  welcomeText: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  button: {
    backgroundColor: '#367CFF',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
