import styled from "styled-components";

export const Container = styled.div`
width: 600px;
height: 600px;
background: ${props => props.theme.SHADOW};
color: ${props => props.theme.TEXT};
`;