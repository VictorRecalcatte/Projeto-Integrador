import React from 'react';
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const data = [
  { id: '1', title: 'Efeito Estufa', content: 'É necessário reduzir significativamente as emissões de gases como dióxido de carbono, metano e óxido nitroso para evitar os piores impactos das mudanças climáticas. ' },
  { id: '2', title: 'Energias Renovaveis', content: 'A substituição de combustíveis fósseis por fontes de energia renováveis, como energia solar e eólica, é fundamental para reduzir as emissões e garantir um futuro energético sustentável. ' },
  { id: '3', title: 'Praticas Sustentaveis', content: 'A adoção de práticas sustentáveis em todos os setores da sociedade, desde a agricultura até a indústria, é crucial para reduzir o impacto ambiental e promover a sustentabilidade.' },
  { id: '4', title: 'Conscientização Publica', content: 'A educação e a conscientização da população sobre a importância da preservação ambiental são essenciais para mobilizar a sociedade em prol da ação climática. ' },
  
  // Adicione mais dados conforme necessário
];

const Card = ({ title, content }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardContent}>{content}</Text>
  </View>
);

const LazyRow = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Card title={item.title} content={item.content} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#D2F1E1',
    borderRadius: 8,
    padding: 20,
    marginHorizontal: 10,
    width: 205,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 14,
    color: '#101130',
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  cardContent: {
    fontSize: 14,
    color: '#606176',
    textAlign: 'justify',
  },
});

export default LazyRow;
