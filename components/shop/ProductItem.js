// presentational component; no logic, any data passed from other components
// works with productoverviewscreen
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';

const ProductItem = props => {
  return (
    <View style={styles.product}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: props.image }} />
      </View>
      <View style={styles.details}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        {/* color prop is a rn button prop */}
        <Button color={Colors.primary} title='View Details' onPress={props.onViewDetail} />
        <Button color={Colors.primary} title='To Cart' onPress={props.onAddToCart} />
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: .26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    // shadow props only for iOS, so 'elevation' for android
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    // width & height must be given bc is a network img, not local
    width: '100%',
    height: '100%'
  },
  details: {
    alignItems: 'center', // horizontal center, not vertical bc flex column
    height: '15%',
    padding: 10
  },
  title: {
    fontSize: 18,
    marginVertical: 4
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 20
  }
});

export default ProductItem;