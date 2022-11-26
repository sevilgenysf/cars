import React from 'react';
import { View, Text, Image, Linking } from 'react-native';

import Item from './Item';
import ItemSection from './ItemSection';
import Button from './Button';

const CarDetail = (props) => {
  return (
    <Item>
      <ItemSection>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}> {props.brand.brand} </Text>
          <Text style={styles.headerText}> {props.brand.model[1].name} </Text>
        </View>
      </ItemSection>
      <ItemSection>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: props.brand.model[1].image,
          }}
        />
      </ItemSection>
      <ItemSection>
        <Button
          buttonPress={() => {
            Linking.openURL(props.brand.model[0].url);
          }}
        />
      </ItemSection>
    </Item>
  );
};

const styles = {
  headerContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  tinyLogo: {
    flex: 1,
    width: 0,
    height: 300,
  },
};

export default CarDetail;
