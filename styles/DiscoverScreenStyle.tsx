import { StyleSheet } from 'react-native';

export const DiscoverStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // backgroundColor: '#befb9f',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  containerItems: {
    width: 340,
    marginTop: 20,
    // borderWidth: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 140,
    height: 140,
    padding: 8,
    margin: 15,
    // borderWidth: 1,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: '#dadadb',
    elevation: 10,
  },
});