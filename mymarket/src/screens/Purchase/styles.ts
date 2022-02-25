import { LinearGradient } from 'expo-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import styled, { css } from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
`;

export const Header = styled(LinearGradient).attrs(({ theme }) => ({
    colors: theme.COLORS.GRADIENT
}))`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: ${getStatusBarHeight() + 35}px 24px 28px;
`;

export const Title = styled.Text`
    font-size: 24px;
    text-align: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.TITLE};
    `};
`;

export const Sizes = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 40px;
`;

export const Form = styled.View`
    width: 100%;
    padding: 24px;
`;

export const Label = styled.Text`
    font-size: 14px;
    margin-bottom: 16px;
    
    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const LabelComparison= styled.Text`
    font-size: 14px;
    margin-bottom: 16px;
    margin-top: 16px;
    
    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const FormRow = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
`;

export const InputGroup = styled.View`
    width: 100%;
    margin-bottom: 16px;
`;

export const InputGroupComparison = styled.View`
    width: 50%;
    margin-bottom: 16px;
`;

export const Price = styled.Text`
    font-size: 14px;
    margin: 10px 0;
    align-self: flex-end;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const PriceComparison = styled.Text`
    font-size: 14px;
    margin: 10px 0;
    align-self: center;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;