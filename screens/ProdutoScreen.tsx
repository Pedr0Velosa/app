import React, { useState, useEffect } from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ProductCardProps } from './HomeScreen'
import { FontAwesome } from '@expo/vector-icons';
import useTheme from '../contexts/useTheme';
import Buttons from '../components/Buttons';
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';

type NavigateProps = {
  Produto: { id: number }
}

const ProdutoScreen = ({ route }: any) => {
  const { id } = route.params
  const [item, setItem] = useState<ProductCardProps>()
  const { theme } = useTheme()
  const navigation = useNavigation<StackNavigationProp<NavigateProps>>()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${ id }`)
      .then(res => res.json())
      .then(json => setItem(json))
  }, [])

  if (!item) return <Text>Carregando...</Text>
  return (
    <>
      <View style={[styles.container, { backgroundColor: theme.ligthBackground }]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={[styles.goBack, { backgroundColor: theme.ligthColor }]}>
            <FontAwesome
              name="long-arrow-left"
              size={40}
            />
          </View>
        </TouchableOpacity>
        <View>
          <Image
            style={styles.image}
            resizeMode='cover'
            source={{ uri: item.image }}
          />
          <Text
            style={[styles.text, { color: theme.mainColor }]}
          >{item.title}</Text>
        </View>
        <View>
          <Buttons item={item} />
        </View>
      </View>
    </>
  )
}

export default ProdutoScreen

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%'
  },
  image: {
    minWidth: 250,
    height: 250,
    marginBottom: 10
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 8,
    paddingBottom: 8,
    letterSpacing: 2,
  },
  goBack: {
    padding: 5,
    borderRadius: 9999,
    width: 60,
    height: 45,
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20
  },
  addButton: {
    backgroundColor: 'green',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginVertical: 15
  },
  label: {
    color: 'white',
    marginLeft: 10,
    fontSize: 20
  },
  buttonText: {
    fontSize: 25
  }
})