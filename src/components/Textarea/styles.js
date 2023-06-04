import styled from 'styled-components'

export const Container = styled.textarea`
    width: 100%;
    height: 150px;

    background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};
    color: ${(props) => props.theme.COLORS.WHITE};

    border: none;
    resize: none;
    margin-bottom: 8px;

    border-radius: 10px;
    padding: 16px;

    &::placeholder{
        color: ${(props) => props.theme.COLORS.GRAY_300};
    }

`
