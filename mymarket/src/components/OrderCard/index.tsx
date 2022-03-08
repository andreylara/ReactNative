import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Name,
    Description,
    StatusContainer,
    StatusLabel
} from './styles';

export type ListsProps = {
    id: string;
    name: string;
    bought: boolean;
    price: string;
    weight: string;
    added: boolean;
}

type Props = TouchableOpacityProps & {
    index: number;
    data: ListsProps;
}

export function OrderCard({ index, data, ...rest }: Props) {
    return (
        <Container index={index} {...rest}>

            <Name>{data.name}</Name>

            {data.bought &&
                <Description>
                    {data.weight} kg/L por R$ {data.price}
                </Description>
            }

            <StatusContainer
                status={data.bought}>
                <StatusLabel
                    status={data.bought}>
                    {data.bought ? "Comprado" : "Pendente"}
                </StatusLabel>
            </StatusContainer>
        </Container>
    )
}
