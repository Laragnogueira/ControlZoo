import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 6,
      backgroundColor: '#88CBCB',
      paddingTop: 50, 
      justifyContent: 'flex-start', 
    },
    title: {
    fontSize: 24, 
    fontWeight: 'bold',  
    color: '#252525',  
    paddingLeft: 10,
    marginBottom: 20,  
    },
    newsList: {
      paddingBottom: 20,
    },
    newsCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 10,
      padding: 5,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      overflow: 'hidden', 
      alignItems: 'center',
      paddingBottom: 10,
    },
    cardImageContainer: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        backgroundColor: '#f2f2f2', 
    },
    cardImage: {
      width: 100,
      height: 100,
      borderTopLeftRadius: 15,
      borderBottomLeftRadius: 15,
    },
    cardContent: {
      flex: 1,
      padding: 10,
    },
    newsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    newsDescription: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
      marginBottom: 15,
    },
    readMoreButton: {
      backgroundColor: '#88CBCB',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 5,
      alignItems: 'center',
    },
    readMoreText: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });
  

export default styles;
