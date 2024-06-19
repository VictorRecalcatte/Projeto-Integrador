import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Card = ({ title, content, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardContent}>{content}</Text>
  </TouchableOpacity>
);

const Projects = () => {
  const router = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.1.2:3636/projetos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Erro ao buscar dados da API:', error);
      }
    };

    fetchData();
  }, []);

  const handleCardPress = (item) => {
    // Navegar para a tela de detalhes do projeto
    router.push({
      pathname: 'projectDetails',
      params: { descricao: item.descricao,
        nome: item.nome,
        objetivo: item.objetivo,
        sobre: item.sobre,
      },
    });
  };

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <Card
          title={item.nome}
          content={item.descricao}
          onPress={() => handleCardPress(item)}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      vertical
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#D2F1E1',
    borderRadius: 8,
    padding: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    height: 80,
  },
  cardTitle: {
    fontSize: 14,
    color: '#101130',
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 14,
    color: '#606176',
    textAlign: 'justify',
  },
  container: {
    padding: 10,
  },
});

export default Projects;
