import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetailsScreen = ({ route }) => {
    // Use optional chaining to handle undefined route.params
    const productId = route?.params?.productId;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (productId) {
            const fetchProductDetails = async () => {
                try {
                    const response = await fetch(`https://dummyjson.com/products/${productId}`);
                    const data = await response.json();
                    setProduct(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching product details:', error);
                    setLoading(false);
                }
            };

            fetchProductDetails();
        } else {
            // Handle case when productId is not available
            console.error('No productId found');
            setLoading(false);
        }
    }, [productId]);

    if (loading) {
        return <Text>Loading...</Text>;
    }

    if (!product) {
        return <Text>Product not found</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: product.thumbnail }} style={styles.image} />
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>Price: ${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    title: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 10,
        fontSize: 16,
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ProductDetailsScreen;
