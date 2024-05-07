import { Image } from "../premade-components/image";
import { Text } from "../premade-components/text";
import { TextField } from "../premade-components/text-field";
import { Button } from "../premade-components/button";
import { ComponentTypes } from "../../constants/component-types";
import { ComponentProps } from "../../store/useEditorStore";

export const RenderComponent = ({ type, props, id }: ComponentProps) => {
  switch (type) {
    case ComponentTypes.TEXT:
      return <Text props={props} id={id} />;

    case ComponentTypes.TEXTFIELD:
      return <TextField props={props} id={id} />;

    case ComponentTypes.BUTTON:
      return <Button props={props} id={id} />;

    case ComponentTypes.IMG:
      return <Image props={props} id={id} />;

    default:
      return (
        <div style={{ border: "1px solid blue", padding: "1rem" }}>
          This compoennt dosen't exist
        </div>
      );
  }
};
