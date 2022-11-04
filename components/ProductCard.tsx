import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import { ProductCardProps } from '../screens/HomeScreen';

type NavigateProps = {
  Produto: { id: number }
}

export default function ProductCard({ item }: { item: ProductCardProps }) {
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>()
  return (
    <TouchableOpacity
      onPress={() => (
        navigation.navigate('Produto', { id: item.id })
      )}
    >
      <View
        style={styles.container}
      >
        <Image
          style={styles.image}
          resizeMode='cover'
          source={{ uri: item.image }}
        />
        <Text
          style={styles.text}
        >{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: '#969696',
    borderRadius: 10
  },
  image: {
    minWidth: 250,
    height: 250,
    marginBottom: 10
  },
  text: {
    fontSize: 16,
    paddingHorizontal: 8,
    paddingBottom: 8
  }
})