import React from 'react';
import { FlatList, Text } from 'react-native';  // FlatList for optimized dynamic list
import { useSelector } from 'react-redux';  // useSelector allows us to tap into redux store to get products

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = props => {
  // state.products from app.js  'products: productsReducer
  const products = useSelector(state => state.products.availableProducts);

  // 'keyExtractor' prop not needed in this FlatList bc will automatically look for 'id'; only required if working with older ver of react-native
  // 'itemData' and 'item' received by rn
  // 'item' is each product
  return (
    <FlatList
      data={products}
      renderItem={itemData => (
        <ProductItem
          image={itemData.item.imageUrl}
          title={itemData.item.title}
          price={itemData.item.price}
          onViewDetail={() => {
            props.navigation.navigate(
              // {routeName: 'ProductDetail'}
              'ProductDetail',
              {
                productId: itemData.item.id,
                productTitle: itemData.item.title
              }
            )
          }}
          onAddToCart={() => { }}
        />
      )}
    />
  );
};

// adding navigationOptions property to ProductsOverviewScreen
ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products'
};

export default ProductsOverviewScreen;