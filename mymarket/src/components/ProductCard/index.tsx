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

                        <Description>
                            Menor preço: R$ {data.lowestPrice}
                        </Description>

                        <Identification>
                            <Description>
                                Último preço: R$ {data.price}
                            </Description>
                            <Date>24/02/2022</Date>
                        </Identification>
                    </Details>
                </Content>
            </GestureHandlerRootView>

            <Line />
        </Container>
    )
}