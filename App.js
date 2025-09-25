import React from 'react';
import { View, Text, Image, Button, Linking, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const student = {
    name: "Angellot Mateo Caamaño Toloza",
    bio: "Soy un estudiante de ingenieria que le gusta jugar videojuegos y desarrollar en backend aunque aveces me estresa mucho.",
    photo: require("./assets/foto.png"),
    songs:[
      {title: "La mejor serie del mundo", url: "https://www.youtube.com/watch?v=EyrflENzpww&list=PL1CC20C3F3E8DACF3"},
      {title: "Cancion favorita", url: "https://www.youtube.com/watch?v=XFkzRNyygfk&list=RDXFkzRNyygfk&start_radio=1"},
    ],
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={student.photo} style={styles.photo} />
      <Text style={styles.title}>{student.name}</Text>
      <Text style={styles.bio}>{student.bio}</Text>

      {student.songs.map((song, index) => (
        <Button
          key={index}
          title={`Escuchar ${song.title}`}
          onPress={() => Linking.openURL(song.url)}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  name: {
    textAlign: "center",
    marginBottom: 10,
    padding: 5,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  bio: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});
