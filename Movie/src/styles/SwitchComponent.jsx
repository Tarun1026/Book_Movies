import styled from "styled-components";

export const SwitchContainer = styled.div`
display: flex;
align-items: center;
cursor: pointer;
`;

export const SwitchLabel = styled.span`
margin-left: 10px;

@media (max-width: ${({ theme }) => theme.media.mobile}) {
  font-size: 0.9rem;
}
`;

export const SwitchButton = styled.div`
width: 50px;
height: 25px;
background: ${({ isOn }) => (isOn ? "#4caf50" : "#ccc")};
border-radius: 25px;
position: relative;
margin-left: 10px;
transition: background 0.3s;

&:before {
  content: "";
  position: absolute;
  top: 2.5px;
  left: ${({ isOn }) => (isOn ? "25px" : "2.5px")};
  width: 20px;
  height: 20px;
  background: white;
  border-radius: 50%;
  transition: left 0.3s;
}

@media (max-width: ${({ theme }) => theme.media.mobile}){
width:40px;
height:20px;

&:before{
width:13px;
height: 15px;
}
`;
