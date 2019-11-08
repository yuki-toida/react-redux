import styled from "styled-components";

interface Props {
  completed: boolean;
}

export const List = styled.li<Props>`
	text-decoration: ${props => props.completed? "line-through": "none" };
`;
