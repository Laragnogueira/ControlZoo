import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins'; 
import styles from '../styles/VaccinationCardStyles'; 

const VaccinationCardScreen = () => {
  const route = useRoute();
  const { pet } = route.params; 

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <Text>Carregando fontes...</Text>;
  }

  const vaccinations = [
    { id: '1', name: 'Vacina Antirrábica', date: '12/12/2023', status: 'Vacina Administrada' },
    { id: '2', name: 'Vacina Polivalente', date: '20/10/2023', status: 'Vacina Administrada' },
  ];

  const pendingVaccinations = [
    { id: '1', name: 'Vacina V10', date: '15/01/2024' },
    { id: '2', name: 'Vacina Leptospirose', date: '05/02/2024' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={pet.image} style={styles.petImage} />
      </View>

      <Text style={[styles.petName, { fontFamily: 'Poppins_700Bold' }]}>{pet.name}</Text>

      <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Vacinas Administradas</Text>
      <FlatList
        data={vaccinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={[styles.vaccineName, { fontFamily: 'Poppins_500Medium' }]}>{item.name}</Text>
            <Text style={[styles.vaccineDetails, { fontFamily: 'Poppins_400Regular' }]}>Data: {item.date}</Text>
            <Text style={[styles.vaccineStatus, { fontFamily: 'Poppins_400Regular' }]}>{item.status}</Text>
          </View>
        )}
      />

      <Text style={[styles.title, { fontFamily: 'Poppins_700Bold' }]}>Vacinas Pendentes</Text>
      <FlatList
        data={pendingVaccinations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cardPending}>
            <Text style={[styles.vaccineName, { fontFamily: 'Poppins_500Medium' }]}>{item.name}</Text>
            <Text style={[styles.vaccineDetails, { fontFamily: 'Poppins_400Regular' }]}>Data: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default VaccinationCardScreen;
