import React, { useState, useEffect } from 'react';
import { Alert, Platform, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

import { ButtonBack } from '@components/ButtonBack';
import { InputData } from "@components/InputData";
import { Button } from '@components/Button';
import { PurchaseNavigationProps } from 'src/@types/navigation';

import { LowerValue } from '@utils/utils';

import {
    Container,
    Header,
    Form,
    Title,
    Label,
    LabelComparison,
    InputGroup,
    InputGroupComparison,
    FormRow,
    Price,
    PriceComparison
} from './styles';
import { ProductProps } from '@components/ProductCard';

type ProductResponse = ProductProps

export function Purchase() {
    const [product, setProduct] = useState<ProductResponse>({} as ProductResponse);
    const [quantity, setQuantity] = useState(1);
    const [weight1, setWeight1] = useState(0);
    const [weight2, setWeight2] = useState(0);
    const [price1, setPrice1] = useState(0);
    const [price2, setPrice2] = useState(0);    
    const [sendingOrder, setSendingOrder] = useState(false);
    
    const value1 = price1 ? price1 / weight1 : 0.00;
    const value2 = price2 ? price2 / weight2 : 0.00;
    const lowerValue = LowerValue(price1, price2);
    const amount = quantity ? LowerValue(price1, price2) * quantity : 0.00;
    
    const lowerProductWeight = value1 < value2 ? weight1 : weight2;
    const lowerProductValue = LowerValue(product.lowestPrice, lowerValue);

    const navigation = useNavigation();
    const route = useRoute();
    const { id } = route.params as PurchaseNavigationProps;

    function handleGoBack() {
        navigation.goBack();
    }

    function handlePurchase() {
        if (!quantity) {
            return Alert.alert('Compra', 'Informe a quantidade.')
        }
        if (!weight1 && !weight2) {
            return Alert.alert('Compra', 'Informe o peso.')
        }
        if (!price1 && !price2) {
            return Alert.alert('Compra', 'Informe o preço.')
        }

        setSendingOrder(true);

        firestore().
            collection('products')
            .doc(id)
            .update({
                bought: true,
                price: lowerValue,
                lowestPrice: lowerProductValue,
                quantity: quantity,
                weight: lowerProductWeight,
                date: new Date().toDateString(),
            })
            .then(() => navigation.navigate('home'))
            .catch(() => {
                Alert.alert('Compra', 'Não foi possível realizar a compra.');
                setSendingOrder(false);
            })
    }

    useEffect(() => {
        if (id) {
            firestore()
                .collection('products')
                .doc(id)
                .get()
                .then(response => setProduct(response.data() as ProductResponse))
                .catch(() => Alert.alert('Compra', 'Não foi possível carregar o produto'));
        }
    }, [id]);

    
    return (
        <Container
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Header>
                <ButtonBack
                    onPress={handleGoBack} />
                <Title>{product.name}</Title>
            </Header>

            <Form>
                <InputGroup>
                    <Label>Dados do produto</Label>

                    <InputData
                        type="QTD"
                        onChangeText={(value) => setQuantity(Number(value))}/>
                        
                    <LabelComparison>Comparação de preço</LabelComparison>

                    <FormRow>
                        <InputGroupComparison>
                            <InputData
                                type="KG"
                                onChangeText={(value) => setWeight1(Number(value))}/>
                            <InputData
                                type="R$"
                                onChangeText={(value) => setPrice1(Number(value))}/>                          
                            <PriceComparison>Valor de R$ {value1}</PriceComparison>
                        </InputGroupComparison>

                        <InputGroupComparison>
                            <InputData
                                type="KG"
                                onChangeText={(value) => setWeight2(Number(value))}/>
                            <InputData
                                type="R$"
                                onChangeText={(value) => setPrice2(Number(value))}/>                          
                            <PriceComparison>Valor de R$ {value2}</PriceComparison>
                        </InputGroupComparison>
                    </FormRow>
                </InputGroup>

                <Price>Valor recomendado R$ {Number(lowerValue)}</Price>
                
                <Price>Valor total R$ {amount}</Price>

                <Button
                    title="Confirmar compra"
                    onPress={handlePurchase}
                    isLoading={sendingOrder} />
            </Form>
        </Container>
    )
}