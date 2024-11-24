import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking, Image, Alert } from 'react-native';
import styles from '../styles/NewsStyles';
import CustomAlert from './CustomAlert';

const newsData = [
  {
    id: '1',
    title: 'Como cuidar do seu pet no inverno',
    description: 'Dicas para manter seu animal confortável durante a estação mais fria.',
    link: 'https://www.reidosanimais.com.br/blog/4-dicas-para-cuidar-do-pet-no-inverno/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOC5k33ocS9DaaVbkiqgaU16CehD_6tLy-Kw&s',
  },
  {
    id: '2',
    title: 'Alimentação saudável para cães',
    description: 'Entenda a importância de uma dieta balanceada para o seu cachorro.',
    link: 'https://trampospet.com.br/nutricao-canina/guia-completo-nutricao-balanceada-para-caes-alimentacao-saudavel/',
    image: 'https://trampospet.com.br/wp-content/uploads/2024/03/image-9-1024x682.jpg', 
  },
  {
    id: '3',
    title: 'Vacinação em gatos',
    description: 'Saiba como manter seu gato protegido contra doenças.',
    link: 'https://petcare.com.br/vacinas-obrigatorias-para-gatos/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU-k8Vor9-k4ei-wWCuWsNDfhW5MPFr-Forg&s', 
  },
];

const NewsScreen = () => {

  const [alertVisible, setAlertVisible] = useState(true);

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error('Erro ao abrir link: ', err));
  };

  const renderItem = ({ item }) => (
    <View style={styles.newsCard}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.newsTitle}>{item.title}</Text>
        <Text style={styles.newsDescription}>{item.description}</Text>
        <TouchableOpacity style={styles.readMoreButton} onPress={() => openLink(item.link)}>
          <Text style={styles.readMoreText}>Leia mais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  useEffect(() => {
    setAlertVisible(true);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notícias sobre Pets</Text>
      <FlatList
        data={newsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.newsList}
      />
      <CustomAlert visible={alertVisible} onClose={() => setAlertVisible(false)} />
    </View>
  );
};

export default NewsScreen
