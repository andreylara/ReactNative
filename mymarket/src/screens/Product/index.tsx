import React, { useState, useEffect } from "react";
import { Platform, TouchableOpacity, ScrollView, Alert, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import { useRoute, useNavigation } from "@react-navigation/native";
import { ProductNavigationProps } from "src/@types/navigation";

import { ButtonBack } from "@components/ButtonBack";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { ProductProps } from "@components/ProductCard";

import {
    Container,
    Header,
    Title,
    DeleteLabel,
    Form,
    Label,
    InputGroup,
    InputGroupHeader,
    MaxCharacters
} from "./styles";

type ProductResponse = ProductProps

export function Product() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [weight, setWeight] = useState(0);
    const [price, setPrice] = useState(0);
    const [lowestPrice, setLowestPrice] = useState(0);
    const [bought, setBought] = useState(false);
    const [added, setAdded] = useState(false);
    const [date, setDate] = useState(new Date().toDateString());
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as ProductNavigationProps;

    async function handleAdd() {
        if (!name.trim()) {
            return Alert.alert('Cadastro', 'Informe o nome do produto.');
        }

        setIsLoading(true);
        setQuantity;
        setWeight;
        setPrice;
        setLowestPrice;
        setBought;
        setAdded;
        setDate;

        firestore()
            .collection('products')
            .add({
                name,
                name_insensitive: name.toLowerCase().trim(),
                description,
                quantity,
                weight,
                price,
                lowestPrice,
                bought,
                added,
                date
            })
            .then(() => navigation.navigate('home'))
            .catch(() => {
                setIsLoading(false);
                Alert.alert('Cadastro', 'Não foi possível cadastrar o produto.');
            });
    }

    function handleGoBack() {
        navigation.goBack();
    }

    function handleDelete() {
        firestore()
            .collection('products')
            .doc(id)
            .delete()
            .then(() => navigation.navigate('home'));
    }

    useEffect(() => {
        if (id) {
            firestore()
                .collection('products')
                .doc(id)
                .get()
                .then(response => {
                    const product = response.data() as ProductResponse;

                    setName(product.name);
                    setDescription(product.description);
                })
        }
    }, [id]);

    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ScrollView
                showsVerticalScrollIndicator={false}>
                <Header>
                    <ButtonBack onPress={handleGoBack} />

                    <Title>Cadastrar</Title>
                    {id ?
                        <TouchableOpacity
                            onPress={handleDelete}>
                            <DeleteLabel>Deletar</DeleteLabel>
                        </TouchableOpacity>
                        : <View style={{ width: 20 }} />
                    }
                </Header>

                <Form>
                    <InputGroup>
                        <Label>Nome</Label>
                        <Input
                            maxLength={25}
                            onChangeText={setName}
                            value={name} 
                            editable={!id}/>
                    </InputGroup>

                    <InputGroup>
                        <InputGroupHeader>
                            <Label>Descrição</Label>
                            <MaxCharacters>{description.length} de 50</MaxCharacters>
                        </InputGroupHeader>
                        <Input
                            multiline
                            maxLength={50}
                            style={{ height: 80 }}
                            onChangeText={setDescription}
                            value={description} 
                            editable={!id}/>
                    </InputGroup>

                    {!id &&
                        <Button
                            title="Cadastrar Produto"
                            isLoading={isLoading}
                            onPress={() => {
                                handleAdd();
                            }} />
                    }
                </Form>
            </ScrollView>
        </Container>
    )
}