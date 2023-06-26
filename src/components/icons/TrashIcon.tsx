import { BsTrash3Fill } from "react-icons/bs";
import styled from "styled-components";

const BsTrash3FillIcon = styled(BsTrash3Fill)`
  font-size: 1rem;
  cursor: pointer;
  :hover {
    color: orangered;
  }
`;

export default function TrashIcon() {
  return <BsTrash3FillIcon />;
}
