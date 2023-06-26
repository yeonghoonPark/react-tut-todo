import { BsFillMoonFill } from "react-icons/bs";
import styled from "styled-components";

const BsFillMoonFillIcon = styled(BsFillMoonFill)`
  font-size: 1.5rem;
  color: black;
  cursor: pointer;
  :hover {
    color: orangered;
  }
`;

type Props = {
  onClick?: () => void;
};

export default function MoonIcon({ onClick }: Props) {
  return <BsFillMoonFillIcon onClick={onClick} />;
}
