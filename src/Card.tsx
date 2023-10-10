import { CardContainer } from "./styles";

export type CardProps = {
  id: string;
  text: string;
};

export const Card = ({ text }: CardProps) => {
  return <CardContainer>{text}</CardContainer>;
};
