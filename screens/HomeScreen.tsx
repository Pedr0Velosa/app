import React, { useState, useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { View, StyleSheet, FlatList } from 'react-native'
import useTheme from '../contexts/useTheme'

export type ProductCardProps = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count: number
  }
}

const HomeScreen = () => {
  const [data, setData] = useState<ProductCardProps[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return (
    <View
      style={[styles.container, { backgroundColor: theme.ligthBackground }]}
    >
      <FlatList
        data={data}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 90,
  },
})