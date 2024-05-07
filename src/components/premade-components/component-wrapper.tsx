import { ReactNode } from "react";
import { useEditorState } from "../../store/useEditorStore";
import { css } from "@emotion/css";

const useStyles = () => {
  return {
    wrapper: css({
      display: "flex",
      flexDirection: "column",
    }),
    border: css({
      border: "3px solid #00006d",
      borderRadius: 5,
    }),
  };
};

export const ComponentWrapper = ({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) => {
  const style = useStyles();
  const { selectedComponent, setSelectedComponent } = useEditorState();
  const isSelected = selectedComponent?.id === id;

  return (
    <div
      onClick={() => setSelectedComponent(id)}
      className={`${style.wrapper} ${isSelected ? style.border : ""}`}
    >
      {children}
    </div>
  );
};
