
import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, Image, Alert  } from 'react-native';
import { useNavigation, useRoute  } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import styles from '../styles/AddPetStyles';

const AddPetScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState('');
  const [species, setSpecies] = useState('');
  const [breed, setBreed] = useState('');
  const [gender, setGender] = useState('Macho');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');

  const handleSave = () => {
    if (!name || !species || !breed || !age || !weight) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    const newPet = {
      id: Date.now().toString(),
      name,
      species,
      breed,
      gender,
      age,
      weight,
      image: require('../../assets/images/pet.png') 
    };

    console.log('Novo pet', newPet);

    navigation.navigate('Home', { newPet });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar Pet</Text>

      <View style={styles.imageCard}>
        <Image source={require('../../assets/images/pet.png')} style={styles.image} /> 
      </View>

      <TextInput
        style={styles.input} 
        placeholder="Nome do Pet"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Espécie"
        value={species}
        onChangeText={setSpecies}
      />

      <TextInput
        style={styles.input}
        placeholder="Raça"
        value={breed}
        onChangeText={setBreed}
      />

      <TextInput
        style={styles.input}
        placeholder="Idade (anos)"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      
      <Text style={styles.label}>Gênero</Text>
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Macho" value="Macho" />
        <Picker.Item label="Fêmea" value="Fêmea" />
      </Picker>

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
};


export default AddPetScreen;
