import React from 'react';
import { FlatList, Text } from 'react-native';  // FlatList for optimized dynamic list
import { useSelector } from 'react-redux';  // useSelector allows us to tap into redux store to get products

const ProductsOverviewScreen = props => {
  // state.products from app.js  'products: productsReducer
  const products = useSelector(state => state.products.availableProducts);

  // 'keyExtractor' prop not needed in this FlatList bc will automatically look for 'id'; only required if working with older ver of react-native
  // 'itemData' and 'item' received by rn
  // 'item' is each product
  return <FlatList data={products} renderItem={itemData => <Text>{itemData.item.title}</Text>} />;
};

// adding navigationOptions property to ProductsOverviewScreen
ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;