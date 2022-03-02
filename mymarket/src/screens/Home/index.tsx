import React, { useState, useCallback } from "react";
import { Alert, TouchableOpacity, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import happyEmoji from '@assets/happy.png';

import { useAuth } from "@hooks/auth";
import { Search } from "@components/Search";
import { ProductCard, ProductProps } from "@components/ProductCard";

import { NewProducButton } from "./styles";

import {
    Container,
    Header,
    Greeting,
    GreetingEmoji,
    GreetingText,
    Title,
    MenuHeader,
    MenuItemsNumber
} from "./styles";

export function Home() {
    const [products, setProducts] = useState<ProductProps[]>([]);
    const [search, setSearch] = useState('');

    const { user, signOut } = useAuth();

    const { COLORS } = useTheme();
    const navigation = useNavigation();

    function fetchProducts(value: string) {
        const formattedValue = value.toLocaleLowerCase().trim();

        firestore()
            .collection('products')
            .orderBy('name_insensitive')
            .startAt(formattedValue)
            .endAt(`${formattedValue}\uf8ff`)
            .get()
            .then(response => {
                const data = response.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data(),
                    }
                }) as ProductProps[];
                
                setProducts(data);
            })
            .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta'));
    }

    function handleSearch() {
        fetchProducts(search);
    }

    function handleSearchClear() {
        setSearch('');
        fetchProducts('');
    }

    function handleOpen(id: string) {
        const route = 'product';
        navigation.navigate(route, { id });
    }

    function handleAdd() {
        navigation.navigate('product', {});
    }

    useFocusEffect(useCallback(() => {
        fetchProducts('');
    }, []));

    function handleOption(id: string, name: string, added: boolean){      
        Alert.alert('Produto', name, [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Editar',
                onPress: () => {handleOpen(id)}
            },            
            {
                text: 'Adicionar à lista',
                onPress: () => {
                    !added &&
                    firestore().collection('products').doc(id).update({
                        added: true,
                        bought: false,
                    });
                    fetchProducts('');
                }
            }
        ]);
    }

    return (
        <Container>
            <Header>
                <Greeting>
                    <GreetingEmoji
                        source={happyEmoji} />
                    <GreetingText>Olá, {user?.name}</GreetingText>
                </Greeting>

                <TouchableOpacity
                    onPress={signOut}>
                    <MaterialIcons
                        name="logout"
                        color={COLORS.TITLE}
                        size={24} />
                </TouchableOpacity>
            </Header>

            <Search
                onChangeText={setSearch}
                value={search}
                onSearch={handleSearch}
                onClear={handleSearchClear} />

            <MenuHeader>
                <Title>Produtos</Title>
                <MenuItemsNumber>{products.length} produtos</MenuItemsNumber>
            </MenuHeader>

            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductCard
                        data={item}
                        onPress={() => handleOption(item.id, item.name, item.added)}
                    />
                )}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: 20,
                    paddingBottom: 125,
                    marginHorizontal: 24,
                }}
            />

            <NewProducButton
                title="Cadastrar produto"
                type="secondary"
                onPress={handleAdd} />

        </Container>
    )
}