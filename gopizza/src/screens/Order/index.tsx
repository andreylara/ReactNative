import React, { useState } from 'react';
import { Platform, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { PIZZA_TYPES } from '@utils/pizzaTypes';
import { ButtonBack } from '@components/ButtonBack';
import { RadioButton } from '@components/RadioButton';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

import {
    Container,
    ContentScroll,
    Header,
    Photo,
    Sizes,
    Form,
    Title,
    Label,
    InputGroup,
    FormRow,
    Price
} from './styles';

export function Order() {
    const [size, setSize] = useState('');

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.goBack();
    }

    return (
        <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <ContentScroll>
                <Header>
                    <ButtonBack
                        onPress={handleGoBack}
                        style={{ marginBottom: 108 }} />

                </Header>

                <Photo source={{ uri: 'https://github.com/andreylara.png' }} />

                <Form>
                    <Title>Nome da Pizza</Title>
                    <Label>Selecione um tamanho</Label>

                    <Sizes>
                        {PIZZA_TYPES.map(item => (
                            <RadioButton
                                key={item.id}
                                title={item.name}
                                onPress={() => setSize(item.id)}
                                selected={size === item.id} />
                        ))}
                    </Sizes>

                    <FormRow>
                        <InputGroup>
                            <Label>Número da mesa</Label>
                            <Input keyboardType='numeric' />
                        </InputGroup>

                        <InputGroup>
                            <Label>Quantidade</Label>
                            <Input keyboardType='numeric' />
                        </InputGroup>
                    </FormRow>

                    <Price>Valor de R$ 00</Price>

                    <Button
                        title="Confirmar pedido" />
                </Form>
            </ContentScroll>
        </Container>
    )
}