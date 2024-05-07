import { ComponentWrapper } from "./component-wrapper";

export const Button = ({ props, id }: { props: any; id: string }) => {
  return (
    <ComponentWrapper id={id}>
      <button style={props.style}>{props.text}</button>
    </ComponentWrapper>
  );
};
