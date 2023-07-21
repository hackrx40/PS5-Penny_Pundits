import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Function to fetch data from the Python backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/getMonthEstimate');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      
      {Object.entries(data).map(([category, value]) => (
        <View key={category}>
          <Text>Category: {category}</Text>
          <Text>Value: {value}</Text>
        </View>
      ))}
    </View>
  );
};

export default App;






