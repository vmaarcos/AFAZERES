import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CompletedTasksScreen = ({ route }) => {
  const { completedTasks } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas Concluídas</Text>
      <FlatList
        data={completedTasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.taskText}>{item.text}</Text>
            <Text style={styles.completedAtText}>Concluída em: {item.completedAt}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  taskContainer: { paddingVertical: 10, borderBottomWidth: 1, borderColor: '#ccc' },
  taskText: { fontSize: 18 },
  completedAtText: { fontSize: 14, color: 'gray' },
});

export default CompletedTasksScreen;
