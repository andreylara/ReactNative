import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    width: 100%;
`;

export const Content = styled(RectButton)`
    flex-direction: row;
    align-items: center;
`;

export const Details = styled.View`
    flex: 1;
`;

export const Name = styled.Text`
    font-size: 20px;

    ${({ theme}) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.SECONDARY_900};
    `}
`;

export const Identification = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const State = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const Description = styled.Text`
    font-size: 12px;
    line-height: 25px;

    ${({ theme}) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_400};
    `}
`;

export const Date = styled.Text`
    font-size: 12px;
    line-height: 20px;
    margin-right: 30px;

    ${({ theme}) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_400};
    `}
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    margin: 12px 0;

    background-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const StatusContainer = styled.View`
    padding: 4px 16px;
    border-radius: 12px;
    margin-right: 10px;

    ${({ theme }) => css`
        background-color: ${theme.COLORS.ALERT_50};
        border: 1px solid ${theme.COLORS.ALERT_900};
    `};

`;

export const StatusLabel = styled.Text`
    font-size: 12px;
    line-height: 20px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT}
        color: ${theme.COLORS.ALERT_900};
    `};
`;