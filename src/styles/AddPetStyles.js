import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#88CBCB',
    paddingTop: 50, 
    justifyContent: 'flex-start', 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#252525',
    marginBottom: 20,
    fontFamily: 'Poppins', 
  },
  imageCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingBottom: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    width: 150,
    height: 150,
    borderRadius: 75, 
    backgroundColor: '#f1f1f1',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  imageText: {
    fontSize: 16,
    color: '#252525',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#252525',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    fontFamily: 'Poppins',
  },
  label: {
    fontSize: 16,
    color: '#252525',
    marginBottom: 5,
    fontFamily: 'Poppins',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#252525',
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 16,
    color: '#252525',
    paddingLeft: 10,
  },
  saveButton: {
    backgroundColor: '#252525',
    padding: 10, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginTop: 20, 
  },

  saveButtonText: {
    color: '#fff',
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});

export default styles;
