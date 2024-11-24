import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins'; 
import styles from '../styles/HomeStyles';

const HomeScreen = () => {
  const [pets, setPets] = useState([
    { id: '1', name: 'Rex', image: require('../../assets/images/pet.png') },
    { id: '2', name: 'Fido', image: require('../../assets/images/cat.png') },
  ]);
  const navigation = useNavigation();
  const route = useRoute();

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  useEffect(() => {
    if (route.params?.newPet) {
      setPets((prevPets) => [...prevPets, route.params.newPet]);
    }
  }, [route.params?.newPet]);

  const handleCardPress = (pet) => {
    console.log('Pet selecionado:', pet);
    navigation.navigate('VaccinationCard', { pet });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.textContainer}>
        <Text style={styles.cardName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pets</Text>
      <FlatList
        data={pets}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.cardList}
      />
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddPet')}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};


export default HomeScreen
