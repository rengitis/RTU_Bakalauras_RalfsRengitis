import { ComponentWrapper } from "./component-wrapper";

export const TextField = ({ props, id }: { props: any; id: string }) => {
  return (
    <ComponentWrapper id={id}>
      <input style={props.style} placeholder={props.placeholder} />
    </ComponentWrapper>
  );
};
