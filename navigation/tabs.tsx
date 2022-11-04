import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarrinhoScreen from '../screens/CarrinhoScreen';
import { StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import useTheme from '../contexts/useTheme';
import Stacks from './stacks';
import useCart from '../contexts/useCart';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const { cartQuantity } = useCart()
  const { theme } = useTheme()

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.tabs.active,
        tabBarInactiveTintColor: theme.tabs.inactive,
        tabBarStyle: {
          ...styles.container,
        },
      }}
    >
      <Tab.Screen
        name="Início"
        component={Stacks}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={35}
              style={{ color }}
            />
          )
        }}
      />
      <Tab.Screen
        name='carrinho'
        component={CarrinhoScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign
              name="shoppingcart"
              size={35}
              style={{ color }}
            />
          ),
          tabBarBadge: cartQuantity
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 8,
    left: 20,
    right: 20,
    height: 75,
    elevation: 10,
    borderRadius: 20,
    paddingHorizontal: 25,
  },
})