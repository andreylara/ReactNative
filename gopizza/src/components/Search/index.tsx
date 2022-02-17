import React from "react";
import { TextInputProps } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useTheme } from "styled-components";

import {
    Container,
    Input,
    Button,
    InputArea,
    ButtonClear
} from './styles';
import { GestureHandlerRootView } from "react-native-gesture-handler";

type Props = TextInputProps & {
    onSearch: () => void;
    onClear: () => void;
};

export function Search({ onSearch, onClear, ...rest }: Props) {
    const { COLORS } = useTheme();

    return (
        <Container>
            <InputArea>
                <Input placeholder="pesquisar..." {...rest} />

                <ButtonClear onPress={onClear}>
                    <Feather name="x" size={16} />
                </ButtonClear>
            </InputArea>
            <GestureHandlerRootView>
                <Button onPress={onSearch}>
                    <Feather name="search" size={16} color={COLORS.TITLE} />
                </Button>
            </GestureHandlerRootView>
        </Container>
    )
}