import { css } from "@emotion/css";
import { useEditorState } from "../../store/useEditorStore";
import { RenderComponent } from "./render-components";
import { useDropComponent } from "../../hooks/use-drop-component";

const useStyles = () => {
  return {
    wrapper: css({
      border: "2px solid gray",
      borderRadius: 4,
      padding: 8,
      margin: 8,
    }),
    modalWrapper: css({
      display: "flex",
      flexDirection: "column",
    }),
    dropZone: css({
      display: "flex",
      border: "2px dashed gray",
      borderRadius: 12,
      padding: 12,
      justifyContent: "center",
      fontSize: 18,
      margin: 8,
    }),
    color: css({
      backgroundColor: "#F0F8FF",
      border: "3px solid #00006d",
    }),
  };
};

export const VisualModal = () => {
  const style = useStyles();
  const { components } = useEditorState();
  const { isOver, dropzone } = useDropComponent();

  return (
    <div className={style.wrapper}>
      <div className={style.modalWrapper}>
        {components.map((component, index) => (
          <RenderComponent key={index} {...component} />
        ))}
      </div>
      <div
        ref={dropzone}
        className={`${style.dropZone} ${isOver ? style.color : ""}`}
      >
        {isOver ? "Drop here" : "Drop your component here"}
      </div>
    </div>
  );
};
