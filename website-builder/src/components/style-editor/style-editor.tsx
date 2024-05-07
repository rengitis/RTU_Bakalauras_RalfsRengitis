import { css } from "@emotion/css";
import { useEditorState } from "../../store/useEditorStore";
import { GetComponentProps } from "./get-component-props";
import { Typography } from "@mui/material";

const useStyles = () => ({
  wrapper: css({
    border: "2px solid gray",
    borderRadius: 12,
    margin: 4,
    padding: 20,
    backgroundColor: "#f2f2f2",
    minHeight: 300,
  }),
  title: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 20,
  }),
  text: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }),
});

export const StyleEditor = () => {
  const style = useStyles();
  const { selectedComponent } = useEditorState();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Component Editor</div>
      {selectedComponent === null ? (
        <Typography variant="body2" className={style.text}>
          Select a component to view its properties
        </Typography>
      ) : (
        <GetComponentProps
          props={selectedComponent.props}
          key={selectedComponent.id}
        />
      )}
    </div>
  );
};
