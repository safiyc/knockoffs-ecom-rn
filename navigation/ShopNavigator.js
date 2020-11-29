import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';  // using react-navigation v4 and up, must install stacks separately
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Colors from '../constants/Colors';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen
  },
  {
    defaultNavigatorOptions: {
      headerStyle: {
        // empty string will use default color of OS
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
  }
);

// must wrap ProductsNavigator inside createAppContainer
export default createAppContainer(ProductsNavigator);