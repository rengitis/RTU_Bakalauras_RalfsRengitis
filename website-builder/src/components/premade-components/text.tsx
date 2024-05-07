import { ComponentWrapper } from "./component-wrapper";

export const Text = ({ props, id }: { props: any; id: string }) => {
  return (
    <ComponentWrapper id={id}>
      <div style={props.style}>{props.text}</div>
    </ComponentWrapper>
  );
};
