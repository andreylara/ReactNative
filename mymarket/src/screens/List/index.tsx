import React, { useEffect, useState } from "react";
import { Platform, FlatList, Alert, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from "@react-navigation/native";

import { OrderCard, ListsProps } from "@components/OrderCard";
import { ItemSeparator } from "@components/ItemSeparator";

import {
    Container,
    Header,
    Title,
    CleanListLabel
} from "./styles";

export function List() {
    const [list, setList] = useState<ListsProps[]>([]);

    const navigation = useNavigation();

    function handleProductList(id: string, enablePurchase: boolean) {
        Alert.alert('Lista', '', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Remover',
                onPress: () => {
                    firestore().collection('products').doc(id).update({
                        added: false,
                        bought: false
                    });
                }
            },
            {
                text: 'Comprar',
                onPress: () => {
                    !enablePurchase &&
                        handleOpen(id)
                }
            },
        ]);
    }

    function handleCleanList() {
        firestore()
            .collection('products')
            .get()
            .then(
                function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        doc.ref.update({
                            added: false,
                            bought: false
                        });
                    });
                });
    }

    function handleOpen(id: string) {
        navigation.navigate('purchase', { id });
    }

    useEffect(() => {
        const subscribe = firestore()
            .collection('products')
            .where('added', '==', true)
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                }) as ListsProps[];

                setList(data);
            });

        return () => subscribe();
    }, []);

    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <Title>Lista de compras</Title>
                <TouchableOpacity
                    onPress={handleCleanList}>
                    <CleanListLabel>Limpar</CleanListLabel>
                </TouchableOpacity>
            </Header>

            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <OrderCard
                        index={index}
                        data={item}
                        onPress={() => handleProductList(item.id, item.bought)} />
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />

        </Container>
    )
}