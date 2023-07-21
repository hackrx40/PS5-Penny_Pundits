import { View, Text, Dimensions } from 'react-native';
import React, { useEffect, useState }  from 'react';
import { LineChart } from 'react-native-chart-kit'
import {PieChart} from 'react-native-chart-kit'


const screenWidth = Dimensions.get("window").width;
const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

const LineChrts = () => {
    const [lineChartData, setLCData] = useState({});
    const [pieChartData, setPCData] = useState({});

    useEffect(() =>{
        const fetchLCData = async() => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/getExpMonth');
                setLCData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        const fetchPCData = async() => {
            try {
                const response = await axios.get('http://127.0.0.1:5000/getCatMonth');
                setPCData(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
        };
        fetchPCData();
        fetchLCData();
  }, []);

  const LCcategories = Object.keys(lineChartData);
  const LCvalues = Object.values(lineChartData);
  const PCdata = [
    {
      name: "Clothing and Shoes",
      population: pieChartData["Clothing and Shoes"],
      color: "rgba(131, 167, 234, 1)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Drinks at Home",
      population: pieChartData["Drinks at Home"],
      color: "#F00",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Food at Home",
      population: pieChartData["Food at Home"],
      color: "red",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Going out",
      population: pieChartData["Going out"],
      color: "#ffffff",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
      name: "Leisure and Sports Memberships",
      population: pieChartData["Leisure and Sports Memberships"],
      color: "rgb(0, 0, 255)",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15
    },
    {
        name: "Other Goods and Services",
        population: pieChartData["Other Goods and Services"],
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Public Transport and Taxi",
        population: pieChartData["Public Transport and Taxi"],
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Rent",
        population: pieChartData["Rent"],
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Restaurants",
        population: pieChartData["Restaurants"],
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    },
    {
        name: "Utilities",
        population: pieChartData["Utilities"],
        color: "rgb(0, 0, 255)",
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    }
  ];


    return (
        <View>
            <Text>Expense Line Chart</Text>
            <LineChart
                data={{
                    labels: LCcategories,
                    datasets: [
                        {
                            data: LCvalues
                        }
                    ]
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
                style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />
            <PieChart
  data={PCdata}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  accessor={"population"}
  backgroundColor={"transparent"}
  paddingLeft={"15"}
  paddingBotttom={"15"}
  center={[350, 1]}
  absolute
/>
        </View>
    )
}

export default LineChrts;