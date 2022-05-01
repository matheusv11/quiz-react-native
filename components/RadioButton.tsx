import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

export default function RadioButton(props: { selected: boolean, alternative: string }) {
    return (
        <View style= { styles.container }>
            <View style={ styles.outerRadio }>
                {
                    props.selected ? <View style={ styles.innerRadio }/> : null
                }
            </View>

            <Text style={ styles.radioText}> {props.alternative} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 10,
    },
    outerRadio: {
        height: 24,
        width: 24,
        borderRadius: 12,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },

    innerRadio: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000',
    },

    radioText: {
        left: 6,
        minWidth: 100,
        maxWidth: 150
    }
});