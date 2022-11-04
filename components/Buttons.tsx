import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native'
import React from 'react'
import useCart from '../contexts/useCart';
import { ProductCardProps } from '../screens/HomeScreen';

type ButtonsPropsType = {
  item: ProductCardProps
}

const Buttons = ({ item }: ButtonsPropsType) => {
  const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity } = useCart()
  return (
    <>
      {!getItemQuantity(item.id) ? (
        <>
          <View>
            <Button
              title='+ Adiconar ao Carrinho'
              onPress={() => increaseCartQuantity(item)}
            />
          </View>
        </>
      ) : (
        <View style={styles.container}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'red' }]}
            onPress={() => decreaseCartQuantity(item.id)}
          >
            <Text
              style={styles.text}
            >-</Text>
          </TouchableOpacity>
          <Text
            style={[styles.text, { color: 'white', marginHorizontal: 20 }]}
          >{getItemQuantity(item.id)}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'green' }]}
            onPress={() => increaseCartQuantity(item)}
          >
            <Text
              style={styles.text}
            >+</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  )
}

export default Buttons

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
  }
})