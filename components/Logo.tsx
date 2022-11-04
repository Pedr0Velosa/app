import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../contexts/useTheme';

const Logo = () => {

  const { theme } = useTheme()

  return (
    <View style={[styles.container, { backgroundColor: theme.darkBackground }]}>
      <Text style={[styles.logo, { color: theme.mainColor }]}>Fiap Delivery</Text>
      <FontAwesome name="dropbox" size={25} color={theme.mainColor} />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
  },
  logo: {
    fontSize: 25,
    marginVertical: 15,
    marginRight: 15
  }
})