import React from 'react';
import { View, Text } from 'react-native';

const ItemSection = (props) => {
  return <View style={styles.itemViewStyle}>{props.children}</View>;
};

const styles = {
  itemViewStyle: {
    borderBottomWidth: 1,
    borderColor: 'gainsboro',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
  },
};

export default ItemSection;
