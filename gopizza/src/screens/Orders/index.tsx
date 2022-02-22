import React, { useEffect, useState } from "react";
import { FlatList, Alert } from "react-native";
import firestore from '@react-native-firebase/firestore';

import { useAuth } from "@hooks/auth";

import { OrderCard, OrderProps } from "@components/OrderCard";
import { ItemSeparator } from "@components/ItemSeparator";

import { Container, Header, Title } from "./styles";

export function Orders() {
    const [orders, setOrders] = useState<OrderProps[]>([]);
    //const [message, setMessage] = useState('');
    //const [newStatus, setNewStatus] = useState('');

    var message = '';
    var newStatus = '';

    const { user } = useAuth();

    function handlePizzaDelivered(id: string, currentStatus: string){      
        if(currentStatus === 'Preparando'){
            message = 'Confirmar que a pizza está pronta?';
            newStatus = 'Pronto';
            //setMessage('Confirmar que a pizza está pronta?');
            //setNewStatus('Pronto');
        }
        if(currentStatus === 'Pronto'){
            message = 'Confirmar que a pizza foi entregue?';
            newStatus = 'Entregue';
            //setMessage('Confirmar que a pizza foi entregue?');
            //setNewStatus('Entregue');
        }

        Alert.alert('Pedido', message, [
            {
                text: 'Não',
                style: 'cancel'
            },
            {
                text: 'Sim',
                onPress: () => {
                    firestore().collection('orders').doc(id).update({
                        status: newStatus
                    });
                }
            }
        ]);
    }

    useEffect(() => {
        const subscribe = firestore()
        .collection('orders')
        .where('waiter_id', '==', user?.id)
        .onSnapshot(querySnapshot => {
            const data = querySnapshot.docs.map(doc => {
                return {
                    id: doc.id,
                    ...doc.data()
                } 
            })as OrderProps[];   

            setOrders(data);
        });

        return () => subscribe();
    }, []);

    return (
        <Container>
            <Header>
                <Title>Pedidos feitos</Title>
            </Header>

            <FlatList
                data={orders}
                keyExtractor={item => item.id}
                renderItem={({ item, index }) => (
                    <OrderCard 
                        index={index} 
                        data={item} 
                        disabled={item.status === 'Entregue'}
                        onPress={() => handlePizzaDelivered(item.id, item.status)}/>
                )}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 125 }}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />

        </Container>
    )
}