import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#88CBCB', 
    padding: 12,
    justifyContent: 'center',
    paddingTop: 50, 
    justifyContent: 'flex-start', 
  },
  title: {
    fontSize: 24, 
    fontWeight: 'bold',  
    color: '#252525', 
  },
  cardList: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row', 
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 40,
    marginRight: 15,
  },
  cardName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#252525',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5, 
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default styles
