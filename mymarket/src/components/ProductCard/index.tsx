import React from "react";
import { GestureHandlerRootView, RectButtonProps } from "react-native-gesture-handler";
import { useTheme } from "styled-components";
import { Feather } from '@expo/vector-icons';

import {
    Container,
    Content,
    Details,
    Name,
    Identification,
    Description,
    Date,
    Weight,
    Line,
    StatusContainer,
    StatusLabel,
    State
} from './styles';

export type ProductProps = {
    id: string;
    name: string;
    description: string;
    quantity: number;
    weight: number;
    price: number;
    lowestPrice: number;
    bought: boolean;
    added: boolean;
    date: string;
}

type Props = RectButtonProps & {
    data: ProductProps;
}

export function ProductCard({ data, ...rest }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <GestureHandlerRootView>
                <Content {...rest}>
                    <Details>
                        <Identification>
                            <Name>{data.name}</Name>
                            <State>
                                {data.added &&
                                    <StatusContainer >
                                        <StatusLabel>Na lista</StatusLabel>
                                    </StatusContainer>
                                }
                                <Feather
                                    name="chevron-right"
                                    size={18}
                                    color={COLORS.SHAPE} />
                            </State>
                        </Identification>
                        
                        <Description>
                            {data.description}
                        </Description>

                        <Identification>
                            <Description>
                                Menor preço: R$ {data.lowestPrice}
                            </Description>
                        </Identification>

                        <Identification>
                            <Description>
                                Última compra: R$ {data.price}
                            </Description>
                            <Weight>
                                {data.weight} kg/L
                            </Weight>
                            <Date>{data.date}</Date>
                        </Identification>
                    </Details>
                </Content>
            </GestureHandlerRootView>

            <Line />
        </Container>
    )
}