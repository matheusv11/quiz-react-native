import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import RadioButton from './components/RadioButton';
import { useState, useEffect } from 'react';

export default function App() {

  const [indexQuiz, setIndexQuiz] = useState(0);
  const [points, setPoints] = useState(0);

  const [quiz, setQuiz] = useState([
    {
      question: 'Q1',
      alternatives: {
        A: 'Shining 1',
        B: 'Pearl 1',
        C: 'Diamond 1'
      },
      answer: 'A',
      selected: ''
    },
    {
      question: 'Q2',
      alternatives: {
        A: 'Shining 2',
        B: 'Pearl 2',
        C: 'Diamond 2'
      },
      answer: 'C',
      selected: ''
    },
    {
      question: 'Q3',
      alternatives: {
        A: 'Shining 3',
        B: 'Pearl 3',
        C: 'Diamond 3'
      },
      answer: 'B',
      selected: ''
    },
  ])

  // const setSelected = () => setQuiz((q: any) => {
  //   q[0].selected = q[0].selected === true ? false : true
  //   return [...q]
  // });

  const answer = () => {
    const quizes = [...quiz];
    const actualQuiz = quizes[indexQuiz]
    setPoints(actualQuiz.selected === actualQuiz.answer ? points + 10 : 0)
    actualQuiz.selected = ''
    setQuiz(quizes)
  }

  const setSelected = (alternative: string) => {
    const quizes = [...quiz];
    quizes[indexQuiz].selected = alternative
    setQuiz(quizes);
  }

  const randomQuiz = (item: object[]) => Math.floor(Math.random() * item.length)


  useEffect(()=> {
    setIndexQuiz(randomQuiz(quiz));
  }, []);

  return (
    <View style={styles.container}>
      <Text>  Pontos: {points} </Text>
      <Text> {quiz[indexQuiz].question} </Text>
      <StatusBar style="auto" />
      
      <TouchableOpacity onPress={() => setSelected('A') }>
        <RadioButton alternative={ quiz[indexQuiz].alternatives.A } selected={ quiz[indexQuiz].selected === 'A' } />
        
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setSelected('B') }>
        <RadioButton alternative={ quiz[indexQuiz].alternatives.B }  selected={ quiz[indexQuiz].selected === 'B' } />
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> setSelected('C') }>
        <RadioButton alternative={ quiz[indexQuiz].alternatives.C } selected={ quiz[indexQuiz].selected === 'C' } />
      </TouchableOpacity>

      <TouchableOpacity onPress={ answer }>
        <Text> Responder </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
