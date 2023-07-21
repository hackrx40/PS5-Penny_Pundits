import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const Api = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Function to fetch data from the Python backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/get_data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      {data.map(item => (
        <View key={item.id}>
          <Text>Name: {item.name}</Text>
          <Text>Price: {item.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default Api;