import { useDrag } from "react-dnd";
import { initalComponentProps } from "../constants/initial-component-props";
import { useEditorState } from "../store/useEditorStore";
import { v4 as uuidv4 } from 'uuid';
import { ComponentTypes } from "../constants/component-types";

export const useDragComponent = (type: ComponentTypes, element: string) => {
    const { addComponent } = useEditorState();
  
    const [, drag] = useDrag(
      () => ({
        type: "comp",
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult<{ name: string }>();
          if (item && dropResult && dropResult.name === "dropZone") {
            addComponent({
              type,
              props: {...initalComponentProps[type].props},
              id : uuidv4(),
              element,
            });
          }
        },
      }),
      []
    );
    return drag;
  };