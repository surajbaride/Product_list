import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductListScreen = ({ navigation }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setProducts(data.products);
            setLoading(false);
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate('ProductDetails', { productId: item.id })}>

                    <View style={styles.card}>
                        <Image source={{ uri: item.thumbnail }} style={styles.image} />
                        <Text style={styles.productName}>{item.title}</Text>
                    </View>
                </TouchableOpacity>

            )}
        />
    );
};

const styles = StyleSheet.create({
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
    },
    productName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ProductListScreen;
