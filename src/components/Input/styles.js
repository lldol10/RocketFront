import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${(props) => props.theme.COLORS.BACKGROUND_900};
    color: ${(props) => props.theme.COLORS.GRAY_300};

    margin-bottom: 8px;
    border-radius: 10px;

    > input {
        height: 56px;
        width: 100%;

        padding: 12px;
        color: ${(props) => props.theme.COLORS.WHITE};
        background: transparent;
        border: 0;


        &:placeholder {
            color: ${(props) => props.theme.COLORS.GRAY_300};
        }


    }

     svg {
            margin-left:  16px;
        }


`