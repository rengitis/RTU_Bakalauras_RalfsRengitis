import { ComponentWrapper } from "./component-wrapper";

export const Image = ({ props, id }: { props: any; id: string }) => {
  return (
    <ComponentWrapper id={id}>
      <img style={props.style} src={props.url} />
    </ComponentWrapper>
  );
};
