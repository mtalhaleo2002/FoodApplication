import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../assets/colors/colors';

export default function Details({route, navigation}) {
  const {item} = route.params;

  const renderIngredientsItem = ({item}) => {
    return (
      <View
        style={[
          styles.ingredientsIemWrapper,
          {
            marginLeft: item.id === '1' ? 20 : 0,
          },
        ]}>
        <Image source={item.image} style={styles.ingredientsImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={styles.headerLeft}>
                <Feather
                  name="chevron-left"
                  size={12}
                  color={colors.textDark}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.headerRight}>
              <MaterialCommunityIcons
                name="star"
                size={12}
                color={colors.white}
              />
            </View>
          </View>
        </SafeAreaView>

        {/* Titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* Price */}
        <View style={styles.priceWrapper}>
          <Text style={styles.priceText}>Rs {item.price}</Text>
        </View>

        {/* Pizza Info */}
        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName} {item.sizeNumber}"
              </Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>

            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery In</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} mins</Text>
            </View>
          </View>

          <View>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>

        {/* Ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientTitles}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>

        {/* Place An Order */}
        <TouchableOpacity onPress={() => alert('Your order has been placed')}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = new StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  titlesWrapper: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.textDark,
    width: '50%',
  },
  priceWrapper: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  priceText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 32,
    color: colors.price,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoLeftWrapper: {
    paddingLeft: 20,
  },
  infoItemWrapper: {
    marginBottom: 20,
  },
  infoItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: colors.textDark,
  },
  itemImage: {
    resizeMode: 'contain',
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientTitles: {
    paddingHorizontal: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientsIemWrapper: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientsImage: {
    resizeMode: 'contain',
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    backgroundColor: colors.primary,
    borderRadius: 50,
    paddingVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: colors.black,
    marginRight: 10,
  },
});
