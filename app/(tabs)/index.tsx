import { StyleSheet, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import LazyRow from '@/components/Cards.js';

export default function TabOneScreen() {
  return (
    <View>
    <ScrollView contentContainerStyle={styles.container}>
      
        <Text style={styles.title}>Enfrentando os Desafios Climáticoss</Text>
      
      <View>
        <Text style={styles.texto}>Combater as mudanças climáticas exige união. Todos precisam trabalhar juntos para proteger nosso planeta.</Text>
        <Text style={styles.subtitle}>Ação Contra a Mudança Global do Clima: Um Esforço Coletivo</Text>
        <Text style={styles.texto}>A luta contra a mudança climática exige um compromisso amplo e colaborativo de todos os setores da sociedade. Governos, organizações e indivíduos se unem nesse esforço para reduzir as emissões de gases de efeito estufa, promover o uso de energias renováveis, implementar práticas sustentáveis e conscientizar a população sobre a importância de proteger nosso planeta.</Text>
      </View>
      <View>
        <Text style={styles.subtitle}>Enfrentando os Desafios: </Text>
        <LazyRow />
      </View>
      <View>
        <Text style={styles.subtitle}>Construindo um futuro sustentável:</Text>
        <Text style={styles.texto}>A ação conjunta e o compromisso de todos os setores da sociedade são fundamentais para construir um futuro sustentável para as próximas gerações. Através da implementação de políticas eficazes, da adoção de práticas ambientalmente responsáveis e da conscientização da população, podemos enfrentar os desafios das mudanças climáticas e garantir um planeta saudável para todos.</Text>
      </View>
    
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 30,
    backgroundColor: 'transparent',
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
