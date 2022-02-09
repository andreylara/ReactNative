import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useAuth } from '@hooks/auth';

import brandImg from '@assets/brand.png';

import { Input } from '@components/Input';
import {
    Container,
    Content,
    Title,
    Brand,
    ForgotPasswordButton,
    ForgotPasswordLabel
} from './styles';
import { Button } from '@components/Button';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn, isLogging, forgotPassword } = useAuth();

    function handleSignIn(){
        signIn(email, password);
    }

    function handleForgoPassword(){
        forgotPassword(email);
    }

    return (
        <Container>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Content>
                    <Brand source={brandImg} />

                    <Title>Login</Title>

                    <Input
                        placeholder="E-mail"
                        type="secondary"
                        autoCorrect={false}
                        autoCapitalize="none"
                        onChangeText={setEmail}
                    />

                    <Input
                        placeholder="Senha"
                        type="secondary"
                        secureTextEntry
                        onChangeText={setPassword}
                    />

                    <ForgotPasswordButton onPress={handleForgoPassword}> 
                        <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
                    </ForgotPasswordButton>

                    <Button
                        title="Entrar"
                        type="secondary"
                        onPress={handleSignIn}
                        isLoading={isLogging}
                    />
                </Content>
            </KeyboardAvoidingView>
        </Container>
    );
}