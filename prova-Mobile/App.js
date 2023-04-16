import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const App = () => {
  const [suggestions, setSuggestions] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleInputChange = (text) => {
    setInputText(text);
  };

  const handleAddSuggestion = () => {
    if (inputText !== '') {
      setSuggestions([
        ...suggestions,
        { id: new Date().getTime().toString(), content: inputText },
      ]);
      setInputText('');
    }
  };

  const handleRemoveSuggestion = (id) => {
    setSuggestions(suggestions.filter((suggestion) => suggestion.id !== id));
  };

  const renderSuggestionItem = ({ item }) => (
    <TouchableOpacity
      style={styles.suggestionItem}
      onPress={() => handleRemoveSuggestion(item.id)}
    >
      <Ionicons name="trash-bin" size={24} color="red" />
      <View style={styles.suggestionItemContent}>
        <Text style={styles.suggestionItemText}>{item.content}</Text>
        <View style={styles.suggestionItemInfo}>
          <Text style={styles.suggestionItemInfoText}>Por: Nome do Usuário</Text>
          <Text style={styles.suggestionItemInfoText}>Data: DD/MM/AAAA</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sugestões para o Clube</Text>
        <Ionicons name="add-circle" size={28} color="#2e88ff" onPress={handleAddSuggestion} />
      </View>
      <ScrollView style={styles.suggestionsList}>
        <FlatList
          data={suggestions}
          renderItem={renderSuggestionItem}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={handleInputChange}
          value={inputText}
          placeholder="Digite sua sugestão"
        />
        <Ionicons name="send" size={24} color="#2e88ff" onPress={handleAddSuggestion} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 16,
    paddingRight: 16,
    marginRight: 8,
  },
  suggestionsList: {
    flex: 1,
  },
  suggestionItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
    marginBottom: 8,
    },
    suggestionItemContent: {
    flex: 1,
    marginLeft: 16,
    },
    suggestionItemText: {
    fontSize: 16,
    color: '#333',
    },
    suggestionItemInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    },
    suggestionItemInfoText: {
    fontSize: 12,
    color: '#666',
    },
    });
    
    export default App;
