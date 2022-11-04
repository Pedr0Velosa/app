import { View, FlatList, Button } from 'react-native'
import useCart from '../contexts/useCart'
import CartItems from '../components/CartItems'
import useTheme from '../contexts/useTheme'

const CarrinhoScreen = () => {

  const { cart, buyCart } = useCart()
  const { theme } = useTheme()

  return (
    <View style={{ height: '100%', backgroundColor: theme.ligthBackground }}>
      <FlatList
        data={cart}
        renderItem={({ item }) => (
          <CartItems item={item} />
        )}
      />
      <View style={{ marginBottom: 120 }}>
        <Button
          title="Comprar"
          onPress={buyCart}
        />
      </View>

    </View>
  )
}

export default CarrinhoScreen