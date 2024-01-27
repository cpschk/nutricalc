import { StyleSheet } from 'react-native';

export const homeStyles = StyleSheet.create({
  // backgroundImage: {
  //   flex: 1,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',
  // },
  // container: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(0, 0, 0, 0.3)',
  //   alignItems: 'center',
  // },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    padding: 8,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textHeader: {
    marginTop: 30,
    fontSize: 50,
    color: 'azure',
    backgroundColor: 'rgba(240, 255, 255, 0.1)',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  textDown: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  text: {
    fontSize: 15,
    textAlign: 'center',
    // fontWeight: 'bold',
    color: 'black',
  },

  dietContainer: {
    marginTop: 20,
    width: 340,
    height: 140,
    borderColor: '#545454',
    padding: 8,
    borderRadius: 20,
    backgroundColor: 'rgba(240, 255, 255, 0.85)',
    marginBottom: 30,
    elevation: 10,

  },
  selectsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSelectContainer: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  },
  calculateContainer: {
    width: 140,
    height: 140,
    justifyContent: 'center',
    borderColor: 'black',
    padding: 8,
    margin: 15,
    backgroundColor: 'rgba(240, 255, 255, 0.85)',
    borderRadius: 20,

    // Propiedades para Android
    elevation: 10,

    // Propiedades para iOS
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.5,
    // shadowRadius: 4,
  }
});