import React from 'react';
import { StyleSheet, ScrollView, Image } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useGlobalSearchParams } from 'expo-router'; // Importando hook de rota
import iconImage from '@/assets/images/icon.png';

const ProjectDetails = () => {
  const { nome, descricao, objetivo, sobre } = useGlobalSearchParams();
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{nome}</Text>

        {/* Exibindo a imagem local */}
        <View style={styles.imageContainer}>
          <Image source={iconImage} style={styles.image} resizeMode="cover" />
        </View>

        <View>
          <Text style={styles.subtitle}>Descrição do Projeto:</Text>
          <Text style={styles.texto}>{descricao}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Objetivo do Projeto:</Text>
          <Text style={styles.texto}>{objetivo}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Desenvolvimento:</Text>
          <Text style={styles.texto}>{sobre}</Text>
        </View>
        <View>
          <Text style={styles.subtitle}>Contatos:</Text>
          <Text style={styles.texto}>email: projetos@gmail.com</Text>
          <Text style={styles.texto}>telefone: (55) 95555-5555'</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  innerContainer: {
    padding: 16,
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 22,
    textAlign: 'justify',
    fontWeight: 'bold',
  },
  texto: {
    fontSize: 18,
    textAlign: 'justify',
  },
  imageContainer: {
    alignItems: 'center', // Centraliza horizontalmente
    marginBottom: 20,
    marginTop: 20,
  },
  image: {
    width: 300, // Largura da imagem
    height: 200, // Altura da imagem
    borderRadius: 10, // Bordas arredondadas
  },
});

export default ProjectDetails;
