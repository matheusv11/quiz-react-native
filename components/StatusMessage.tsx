import { View, StyleSheet, Text } from 'react-native';

export default function StatusMessage(props: { correct: boolean } ) {
    return (
        <View style={styles[props.correct ? 'headerFooterStyleValid' : 'headerFooterStyleInvalid']}>
            <Text style={styles.textStyle}> { props.correct ? 'Resposta correta' : 'Resposta errada' }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    headerFooterStyleValid: {
        width: '100%',
        height: 55,
        backgroundColor: '#00f269',
      },

      headerFooterStyleInvalid: {
        width: '100%',
        height: 55,
        backgroundColor: '#a11f21',
      },

      textStyle: {
        textAlign: 'left',
        color: '#fff',
        fontSize: 24,
        padding: 7,
      },
});