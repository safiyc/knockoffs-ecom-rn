import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image } from 'react-native';
import { useSelector } from 'react-redux';

// functional component where props is received
const ProductDetailScreen = props => {
  // get productId from params received from ProductOverviewScreen
  const productId = props.navigation.getParam('productId');
  // select single product via redux
  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId));

  return (
    <View>
      <Text>{selectedProduct.title}</Text>
    </View>
  )
};

// header info
ProductDetailScreen.navigationOptions = navData => {
  return {
    // productTitle from params received from ProductOverviewScreen
    headerTitle: navData.navigation.getParam('productTitle')
  };
}

const styles = StyleSheet.create({});

export default ProductDetailScreen;