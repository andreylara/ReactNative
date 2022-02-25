import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firestore from '@react-native-firebase/firestore';

import { Home } from '@screens/Home';
import { List } from '@screens/List';
import { BottomMenu } from '@components/BottomMenu';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
    const [notifications, setNotifications] = useState('0');
    const { COLORS } = useTheme();

    useEffect(() => {
        const subscribe = firestore()
        .collection('products')
        .where('added', '==', true)
        .where('bought', '==', false)
        .onSnapshot(querySnapshot => {
            setNotifications(String(querySnapshot.docs.length));
        });

        return () => subscribe();
    }, []);

    return (
        <Navigator
            screenOptions={{
                tabBarActiveTintColor: COLORS.SECONDARY_900,
                tabBarInactiveTintColor: COLORS.SECONDARY_400,
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 80,
                    paddingVertical: Platform.OS === 'ios' ? 20 : 0
                }
            }}
        >

        <Screen
            name="home"
            component={Home}
            options={{
                tabBarIcon: ({ color }) => (
                    <BottomMenu 
                        title="Produtos" 
                        color={color} />
                )
            }}
        />

        <Screen
            name="list"
            component={List}            
            options={{
                tabBarIcon: ({ color }) => (
                    <BottomMenu 
                        title="Lista" 
                        color={color} 
                        notifications={notifications}/>
                )
            }}
        />
        </Navigator>
    );
}

