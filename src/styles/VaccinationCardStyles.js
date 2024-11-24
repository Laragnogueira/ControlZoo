import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#88CBCB',
    alignItems: 'center',
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 8,
    borderRadius: 100, 
    overflow: 'hidden',
    width: 150,
    height: 150,
    backgroundColor: '#ddd',
  },
  petImage: {
    width: '100%',
    height: '100%',
    borderRadius: 75,
  },
  petName: {
    fontSize: 24,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    color: '#333',
    marginVertical: 10,
    alignSelf: 'flex-start',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  vaccineName: {
    fontSize: 18,
  },
  vaccineDetails: {
    fontSize: 14,
    color: '#777',
    marginTop: 5,
  },
  vaccineStatus: {
    fontSize: 14,
    color: '#4caf50',
    marginTop: 5,
  },
  cardPending: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    width: '100%',
    borderColor: '#ff9800',
    borderWidth: 1,
  },
});

export default styles;
