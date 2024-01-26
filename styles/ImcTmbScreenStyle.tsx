import { StyleSheet } from 'react-native';

export const ImcTmbStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  dataContainer: {
    flexDirection: 'row',
  },
  data: {
    padding: 10,
  },
  image: {
    width: 170,
    height: 250,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    width: 130,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
  },
  picker: {
    height: 40,
    marginBottom: 12,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width: 160,
    height: 40,
    marginTop: 10,
    backgroundColor: 'blue',
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  hiddenView: {
    alignItems: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  imcTmbView: {
    width: 250,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imctmb: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    width: 100,
    height: 100,
    borderWidth: 1,
  }
});