import styled from "styled-components";

export  const SimpleTextButton = styled.button`
background: none;
border: none;
padding: 0;
font: inherit;
cursor: pointer;
color: ${({ theme }) => theme.color};
font-size: inherit;
font-family: inherit;
text-decoration: underline;
`;