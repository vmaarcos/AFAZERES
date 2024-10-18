import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const ToDoListScreen = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [taskTime, setTaskTime] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      setTasks((prevTasks) => [
        ...prevTasks,
        { key: Math.random().toString(), text: task, time: taskTime, completed: false },
      ]);
      setTask('');
      setTaskTime(null); // Reseta o horário após adicionar a tarefa
    }
  };

  const toggleTaskCompletion = (taskKey) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) =>
        t.key === taskKey ? { ...t, completed: !t.completed } : t
      )
    );

    const taskToComplete = tasks.find((t) => t.key === taskKey);
    if (taskToComplete && !taskToComplete.completed) {
      setCompletedTasks((prevCompleted) => [
        ...prevCompleted,
        { key: taskKey, text: taskToComplete.text, completedAt: new Date().toLocaleString() },
      ]);
    } else {
      setCompletedTasks((prevCompleted) => prevCompleted.filter((t) => t.key !== taskKey));
    }
  };

  const removeTask = (taskKey) => {
    setTasks((prevTasks) => prevTasks.filter((t) => t.key !== taskKey));
    setCompletedTasks((prevCompleted) => prevCompleted.filter((t) => t.key !== taskKey));
  };

  const handleTimeChange = (event, selectedTime) => {
    const currentTime = selectedTime || taskTime;
    setShowTimePicker(false);
    setTaskTime(currentTime);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Afazeres Lista</Text>

      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChangeText={setTask}
      />

      <TouchableOpacity style={styles.button} onPress={() => setShowTimePicker(true)}>
        <Text style={styles.buttonText}>
          {taskTime ? taskTime.toLocaleTimeString() : 'Definir Horário (Opcional)'}
        </Text>
      </TouchableOpacity>

      {showTimePicker && (
        <DateTimePicker
          value={new Date()}
          mode="time"
          display="default"
          onChange={handleTimeChange}
        />
      )}

      <TouchableOpacity style={styles.button} onPress={addTask}>
        <Text style={styles.buttonText}>Adicionar Tarefa</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <TouchableOpacity onPress={() => toggleTaskCompletion(item.key)} style={styles.taskItem}>
              <Text style={item.completed ? styles.completedText : styles.pendingText}>
                {item.text} {item.time && `- ${item.time.toLocaleTimeString()}`} {/* Exibe o horário se estiver definido */}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeTask(item.key)}>
              <Text style={styles.deleteButtonText}>Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.button, { marginTop: 'auto' }]}
        onPress={() => navigation.navigate('CompletedTasks', { completedTasks })}
      >
        <Text style={styles.buttonText}>Ver Últimas Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderColor: '#ccc', borderWidth: 1, padding: 10, marginBottom: 10 },
  taskContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10 },
  taskItem: { flex: 1 },
  completedText: { color: 'green', textDecorationLine: 'line-through' },
  pendingText: { color: 'black' },
  button: { backgroundColor: '#367CFF', padding: 15, borderRadius: 25, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  deleteButton: { backgroundColor: 'red', padding: 5, borderRadius: 15 },
  deleteButtonText: { color: '#fff' },
});

export default ToDoListScreen;
