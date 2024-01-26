import { StyleSheet } from 'react-native';

export const ImcTmbStyles = StyleSheet.create({
  container: {
    // flex:1,
    flexGrow: 1,
    padding: 16,
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
  hiddenView: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
});