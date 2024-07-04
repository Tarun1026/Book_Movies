import styled from "styled-components";

export const   PageContainer = styled.div`
background-color: ${({ theme }) => theme.backgroundColor};
color: ${({ theme }) => theme.color};
min-height: 100vh;
padding: 20px;
`;
