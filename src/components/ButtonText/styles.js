import styled from 'styled-components'

export const Container = styled.button`
    background: none;
    color: ${(props) => props.isActive? props.theme.COLORS.ORANGE: props.theme.COLORS.GRAY_100 };

    border: none;
    font-size: 16px;
`