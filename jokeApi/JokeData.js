
import React,{useState, useEffect}from 'react';
import {StyleSheet, Text, View, ActivityIndicator, FlatList, Button,} from 'react-native';
import {AppLoading} from "expo";


export default function JokeData()  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState({jokes:'shake the device'});

  // site for the joke api to pull randon joke

  let url = 'https://v2.jokeapi.dev/joke/Any?type=single';

  let fetchData= ()=> {
    fetch(url)
    .then((response) => response.json())
    .then((json) => setData(json.joke))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false));
  };

  const handlePress=()=>{
    console.log('i got clicked')
      fetchData()
    }

      return (
        <>
        <View style={styles.container}>
          {isLoading ? <ActivityIndicator />
            :(
             <View>
              <Text >{data}</Text>
            </View>
            )}

              <Button title="Click to get a joke" onPress={handlePress}/>

        </View>
        </>
    );

};


const styles = StyleSheet.create({
  container: {
  flex: 0.8,
padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
