import styled, { css } from "styled-components/native";

type ContainerProps = {
    index: number;
}

type StatusProps ={
    status: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
    width: 50%;
    align_items: center;
    padding: 14px;

    ${({ theme, index }) => css`
        border-right-width: ${index % 2 > 0 ? 0 : 1}px;
        border-right-color: ${theme.COLORS.SHAPE};
    `}
`;

export const Name = styled.Text`
    font-size: 20px;
    margin-top: 21px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TITLE};
        color: ${theme.COLORS.SECONDARY_900};
    `};
`;

export const Description = styled.Text`
    font-size: 14px;
    margin-top: 11px;

    ${({ theme }) => css`
        font-family: ${theme.FONTS.TEXT};
        color: ${theme.COLORS.SECONDARY_400};
    `};
`;

export const StatusContainer = styled.View<StatusProps>`
    padding: 4px 16px;
    border-radius: 12px;
    margin-top: 16px;
    align-items: center;
    justify-content: center;

    ${({ status, theme }) => status && css`
        background-color: ${theme.COLORS.ALERT_50};
        border: 1px solid ${theme.COLORS.ALERT_900};
    `};

    ${({ status, theme }) => !status && css`
        background-color: ${theme.COLORS.SUCCESS_900};
    `};

`;

export const StatusLabel = styled.Text<StatusProps>`
    font-size: 12px;
    line-height: 20px;

    ${({ status, theme }) => css`
        font-family: ${theme.FONTS.TEXT}
        color: ${status ? theme.COLORS.ALERT_900 : theme.COLORS.TITLE};
    `};
`;