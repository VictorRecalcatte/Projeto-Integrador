import React from 'react';
import { StyleSheet, ScrollView, Pressable, Linking } from 'react-native';

import { Text, View } from '@/components/Themed';
import Projects from '@/components/projects';

export default function TabTwoScreen() {
  const openLink = () => {
    const url = 'https://forms.gle/rmk8Mu39UhRtECcA8'; // Substitua com o seu link desejado
    Linking.openURL(url);
  };

  return (
    <View>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Projetos e Iniciativas </Text>
        <Pressable onPress={openLink}>
          <Text style={styles.linkText}>Clique aqui para cadastrar um projeto!</Text>
        </Pressable>
        <Projects />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    height: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop:15,
    marginBottom: 5,
    textAlign: 'center',
  },
  linkText: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'center',
    color: 'green', // Cor do texto do link
    textDecorationLine: 'underline', // Sublinhado para indicar que é um link
  },
});
