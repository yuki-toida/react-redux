import styled from "styled-components";

interface Props {
  completed: boolean;
}

export const TodosListItem = styled.span<Props>`
  text-decoration: ${props => (props.completed ? "line-through" : "none")};
`;
