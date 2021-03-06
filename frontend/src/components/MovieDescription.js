import React, { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

function MovieDescription() {
  let item = useSelector((state) => state.reducerCurrentMovieSelected.movie);
  let recommendedMovies = useSelector(
    (state) => state.reducerMovies.movies.recommendedMovies
  );
  let [movie, setMovie] = useState();
  useEffect(() => {
    if (item.id === undefined || item.id === null) {
      setMovie(recommendedMovies[0]);
    } else {
      setMovie(item);
    }
  }, [item, recommendedMovies]);
  return movie ? (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Image
          style={styles.image}
          source={{
            uri: movie.image,
          }}
        />
      </View>
      <View style={{ flex: 1, backgroundColor: "#1A1A1A", padding: 20 }}>
        <View>
          <Text style={styles.title}>{movie.title}</Text>
        </View>
        <Text style={styles.text}>Year: {movie.year}</Text>
        <Text style={styles.text}>ImdbId: {movie.id}</Text>
        <Text style={styles.text}>Type: {movie.type}</Text>
      </View>
    </View>
  ) : (
    <ActivityIndicator size="large" color="red" />
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    padding: 0,
    margin: 0,
    flexDirection: "row",
    minHeight: 275,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  text: {
    fontSize: 18,
    color: "#fff",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
});

export default MovieDescription;
