import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ListaProdutos } from './views/ListaProdutos';
import { DetalhesProduto } from './views/DetalhesProduto';
import { Checkout } from './views/Checkout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen
            name="ListaProdutos"
            component={ListaProdutos}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F0F4',
  },
});

export default App;
