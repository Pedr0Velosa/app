import { Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import Buttons from './Buttons'
import { ProductCardProps } from '../screens/HomeScreen'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native'

type NavigateProps = {
  Produto: { id: number }
}

type CartItemsType = {
  item: ProductCardProps
}

const CartItems = ({ item }: CartItemsType) => {

  const navigation = useNavigation<StackNavigationProp<NavigateProps>>()

  return (
    <SafeAreaView
      style={styles.container}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate('Produto', { id: item.id })}
      >
        <Image
          style={styles.image}
          resizeMode='contain'
          source={{ uri: item.image }}
        />
      </TouchableOpacity>
      <Text
        style={styles.text}
      >{item.title}</Text>
      <Buttons item={item} />
    </SafeAreaView>
  )
}

export default CartItems

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333'
  },
  text: {
    flexShrink: 2,
    color: 'white'
  },
  image: {
    minWidth: 75,
    height: 75,
    marginBottom: 10,
  },

})