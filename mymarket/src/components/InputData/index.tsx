import React from "react";
import { TextInputProps } from "react-native";

import { Container, Type, Label, Input } from "./styles";

type Props = TextInputProps & {
    type: string;
}

export function InputData({ type, ...rest}: Props) {
    return (
        <Container>
            <Type>
                <Label>{type}</Label>
            </Type>

            <Input keyboardType="numeric" {...rest} />
        </Container>
    )
}