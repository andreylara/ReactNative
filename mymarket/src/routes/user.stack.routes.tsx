import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Product } from "@screens/Product";
import { Purchase } from "@screens/Purchase";
import { List } from "@screens/List";

import { UserTabRoutes } from "./user.tab.routes";

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            {
                <Group>
                    <Screen name="UserTabRoutes" component={UserTabRoutes} />
                    <Screen name="product" component={Product} />
                    <Screen name="purchase" component={Purchase} />
                    <Screen name="list" component={List} />
                </Group>         
            }
        </Navigator>
    );
}