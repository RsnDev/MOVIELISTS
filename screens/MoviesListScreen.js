import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = '815c5c047dfcb76226bd43fca93e2df5';
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieListScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`);
      setMovies((prevMovies) => [...prevMovies, ...response.data.results]);
      setPage(page + 1);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
  };

  const searchMovies = async (query) => {
    setSearchQuery(query);
    if (query === '') {
      setSearchResults([]);
      return;
    }

    try {
      const response = await axios.get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
      setSearchResults(response.data.results);
    } catch (error) {
      console.error('Error searching movies:', error);
    }
  };

  const navigateToDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  const renderMovieItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigateToDetails(item)}>
        <View style={styles.movieItem}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{item.release_date}</Text>
          <Text numberOfLines={2}>{item.overview}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search movies..."
        value={searchQuery}
        onChangeText={searchMovies}
      />
      {searchQuery !== '' ? (
        <FlatList
          data={searchResults}
          renderItem={renderMovieItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <>
          <FlatList
            data={movies}
            renderItem={renderMovieItem}
            keyExtractor={(item) => item.id.toString()}
            onEndReached={fetchMovies}
            onEndReachedThreshold={0.5}
          />
          {loading && <ActivityIndicator style={styles.loader} size="large" color="#0000ff" />}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  searchBar: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  movieItem: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  loader: {
    marginVertical: 20,
  },
});

export default MovieListScreen;
