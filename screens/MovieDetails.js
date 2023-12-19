import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

//const IMAGE_BASE_URL = '..............';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <View style={styles.container}>
      // <Image
      //   style={styles.poster}
      //   source={{ uri: `${IMAGE_BASE_URL}/${movie.poster_path}` }}
      //   resizeMode="cover"
      // />
      <View style={styles.details}>
        <Text style={styles.title}>{movie.title}</Text>
        <Text style={styles.info}>Release Date: {movie.release_date}</Text>
        <Text style={styles.info}>Runtime: {movie.runtime} minutes</Text>
        <Text style={styles.info}>Overview: {movie.overview}</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  poster: {
    width: '100%',
    height: 300,
  },
  details: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default MovieDetailsScreen;
