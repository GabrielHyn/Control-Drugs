    import { Image, StyleSheet, Text, View } from "react-native";

    const Remedio = ({sourceImagem, nome, hora}) => {
    return (
        <View style = {[styles.container]}>
            <View style = {styles.containerImagem}>
            <Image source={sourceImagem} style={styles.imagem}></Image>
            </View>
            <View>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.hora}>Tomar às {hora}</Text>
            </View>
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#E6F1FA',
        borderRadius: 10,
        marginVertical: 5,
    },
    containerImagem: {
        marginRight: 10,
    }, 
    imagem: {
        width: 40,
        height: 40,
        resizeMode: "contain",
    },
    nome: {
        fontSize: 20,
        fontWeight: "600",
    },
    hora: {
        fontSize: 15,
    },

    });

    export default Remedio;
