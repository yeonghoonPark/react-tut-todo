import { BsFillSunFill } from "react-icons/bs";
import styled from "styled-components";

const BsFillSunFillIcon = styled(BsFillSunFill)`
  font-size: 1.5rem;
  color: white;
  cursor: pointer;
  :hover {
    color: orangered;
  }
`;

type Props = {
  onClick?: () => void;
};

export default function SunIcon({ onClick }: Props) {
  return <BsFillSunFillIcon onClick={onClick} />;
}
