import { StyleSheet, Text, View, TouchableOpacity, StatusBar } from 'react-native';
import StatusMessage from './components/StatusMessage';
import RadioButton from './components/RadioButton';
import { useState, useEffect } from 'react';

export default function App() {

  const [indexQuiz, setIndexQuiz] = useState(0);
  const [points, setPoints] = useState(0);
  const [correct, setCorrect] = useState<boolean | null>(null);

  const [quiz, setQuiz] = useState([
    {
      question: 'De quem é a famosa frase “Penso, logo existo”?',
      alternatives: {
        A: 'Descartes',
        B: 'Platão',
        C: 'Galileu Galilei'
      },
      answer: 'A',
      selected: ''
    },
    {
      question: 'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
      alternatives: {
        A: 'Jânio Quadros',
        B: 'João Goulart',
        C: 'Jacinto Anjos'
      },
      answer: 'B',
      selected: ''
    },
    {
      question: 'Quantas casas decimais tem o número pi?',
      alternatives: {
        A: 'Duas',
        B: 'Centenas',
        C: 'Infinitas'
      },
      answer: 'C',
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
    const correct = actualQuiz.selected === actualQuiz.answer
    setCorrect(correct)
    setPoints(correct ? points + 10 : 0)
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
    const randomIndex = randomQuiz(quiz)
    setIndexQuiz(randomIndex);
  }, [points]);

  return (
    <View style={ {flex: 1 } }>
      <StatusBar/>
      {correct !== null && <StatusMessage correct={ correct }/>}

      <View style={styles.container}>
        <Text style={ styles.pointsText}>  Pontos: {points} </Text>
        
        <Text style={ styles.questionText }> {quiz[indexQuiz].question} </Text>
        
        
        <TouchableOpacity onPress={() => setSelected('A') }>
          <RadioButton alternative={ quiz[indexQuiz].alternatives.A } selected={ quiz[indexQuiz].selected === 'A' } />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setSelected('B') }>
          <RadioButton alternative={ quiz[indexQuiz].alternatives.B }  selected={ quiz[indexQuiz].selected === 'B' } />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> setSelected('C') }>
          <RadioButton alternative={ quiz[indexQuiz].alternatives.C } selected={ quiz[indexQuiz].selected === 'C' } />
        </TouchableOpacity>

        <TouchableOpacity style={ styles.answerButton } onPress={ answer }>
          <Text style={ styles.answerText }> Responder </Text>
        </TouchableOpacity>

      </View>
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

  pointsText: {
    fontSize: 26,
    marginBottom: 16,
  },

  questionText: {
    fontSize: 16,
    marginBottom: 12,
  },

  answerButton: {
    marginTop: 16,
    width: 200, // VARIA DE TELA
    justifyContent: 'center',
    alignItems: 'center',
    height: 55,
    borderWidth: 1.8,
    borderRadius: 6,
    backgroundColor: '#211cb8'
  },

  answerText: {
    fontSize: 18,
  }

});
