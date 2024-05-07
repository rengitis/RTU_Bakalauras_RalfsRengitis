import { css } from "@emotion/css";
import { ReactNode } from "react";
import { useDragComponent } from "../../hooks/use-drag-component";
import { ComponentTypes } from "../../constants/component-types";

const useStyles = () => ({
  card: css({
    display: "flex",
    border: "2px solid gray",
    borderRadius: 12,
    margin: 4,
    padding: 4,
    backgroundColor: "#fbfbfb",
  }),
  dragItem: css({
    padding: 8,
    width: "100%",
  }),
  item: css({
    display: "flex",
    justifyContent: "center",
  }),
});

interface ComponentCardProps {
  title: string;
  icon?: ReactNode;
  type: ComponentTypes;
  element: string;
}

export const ComponentCard = ({
  title,
  icon,
  type,
  element,
}: ComponentCardProps) => {
  const style = useStyles();
  const drag = useDragComponent(type, element);

  return (
    <div className={style.card}>
      <div ref={drag} className={style.dragItem}>
        <div className={style.item}>{icon}</div>
        <div className={style.item}>{title}</div>
      </div>
    </div>
  );
};
