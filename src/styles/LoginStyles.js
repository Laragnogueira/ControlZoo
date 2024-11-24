import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
  welcomeText: {
    fontSize: 24,
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    fontFamily: 'Poppins_400Regular',
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    backgroundColor: '#fff',
  },
  forgotPassword: {
    marginTop: 6,
    marginBottom: 16,
    alignSelf: 'flex-end',
  },
  forgotPasswordText: {
    color: '#fff',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#88CBCB',
    padding: 10,
    marginTop: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontFamily: 'Poppins_700Bold',
    color: '#fff',
    fontSize: 16,
  },
})

export default styles
