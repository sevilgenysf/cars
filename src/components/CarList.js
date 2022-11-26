import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import CarDetail from './CarDetail';

import axios from 'axios';

const CarList = () => {
  let [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getResults() {
      const results = await axios('https://givecars.herokuapp.com/');
      setPosts(results.data);
    }
    getResults();
  }, []);

  return (
    <ScrollView>
      {posts.map((brand) => {
        return (
          <View key={brand.model[0].url}>
            <CarDetail brand={brand} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CarList;
