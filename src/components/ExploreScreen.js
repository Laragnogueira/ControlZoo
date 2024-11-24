import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/ExploreStyles'; 
const ExploreScreen = ({ navigation }) => {
  const services = [
    {
      id: '1',
      title: 'Banho e Tosa',
      image: require('../../assets/images/bathing.png'),
    },
    {
      id: '2',
      title: 'Consulta',
      image: require('../../assets/images/consultation.png'),
    },
    {
      id: '3',
      title: 'Vacina',
      image: require('../../assets/images/dog.png'),
    },
    {
      id: '4',
      title: 'Hotel para Pets',
      image: require('../../assets/images/pethotel.png'),
    },
  ];

  const renderCard = (service) => (
    <TouchableOpacity style={styles.card} key={service.id}>
       <Image source={service.image} style={styles.cardImage} />
       <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{service.title}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>O que seu dog precisa?</Text>
      <View style={styles.cardList}>
        {services.map(renderCard)}
      </View>
    </View>
  );
};

export default ExploreScreen;
