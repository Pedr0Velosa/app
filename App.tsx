import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/tabs';
import Logo from './components/Logo';
import ThemeProvider from './contexts/ThemeProvider';
import CartProvider from './contexts/CartContext';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <NavigationContainer>
          <Logo />
          <Tabs />
        </NavigationContainer >
      </CartProvider>
    </ThemeProvider>
  );
}
// options={{ tabBarBadge: 3 }}