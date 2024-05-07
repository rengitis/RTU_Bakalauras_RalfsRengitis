import { useState } from "react";
import { useEditorState } from "../../store/useEditorStore";
import { css } from "@emotion/css";
import { TextField } from "@mui/material";
import { capitalizeFirstLetter } from "../../helpers/capitalize-first-letter";

const useStyles = () => ({
  wrapper: css({
    margin: 8,
  }),
  inputFieldWrapper: css({
    paddingBottom: 10,
  }),
  title: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 20,
    padding: "10px 0px",
  }),
});

interface NestedComponentPropsProps {
  nestedProps: Record<string, string>;
  parentKey: string;
  onNestedChange: (parentKey: string, updatedProps: string) => void;
}

export const GetNestedComponentProps = ({
  nestedProps,
  parentKey,
  onNestedChange,
}: NestedComponentPropsProps) => {
  const style = useStyles();
  const [localNestedProps, setLocalNestedProps] = useState(nestedProps);

  return (
    <div>
      <div className={style.title}>{capitalizeFirstLetter(parentKey)}</div>
      {Object.entries(localNestedProps).map(([key, val]) => (
        <div key={key} className={style.inputFieldWrapper}>
          <TextField
            id={key}
            label={key}
            variant="outlined"
            value={val}
            fullWidth
            size="small"
            sx={{ backgroundColor: "white" }}
            onChange={(e) => {
              const updatedValue = e.target.value;
              setLocalNestedProps((prev) => ({ ...prev, [key]: updatedValue }));
              onNestedChange(key, updatedValue);
            }}
          />
        </div>
      ))}
    </div>
  );
};

export const GetComponentProps = ({
  props,
}: {
  props: Record<string, any>;
}) => {
  const style = useStyles();
  const { selectedComponent, setProps } = useEditorState();
  const [localProps, setLocalProps] = useState(props);

  const handleInputChange = (key: string, value: string) => {
    const updatedProps = { ...localProps, [key]: value };
    setLocalProps(updatedProps);
    if (selectedComponent) {
      setProps(selectedComponent.id, updatedProps);
    }
  };

  if (!selectedComponent?.id) {
    return null;
  }

  return (
    <div className={style.wrapper}>
      {Object.entries(localProps).map(([key, val]) =>
        typeof val !== "object" ? (
          <div className={style.inputFieldWrapper} key={key}>
            <TextField
              id={key}
              label={key}
              variant="outlined"
              sx={{ backgroundColor: "white" }}
              fullWidth
              value={val}
              size="small"
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          </div>
        ) : (
          <GetNestedComponentProps
            key={key}
            nestedProps={val}
            parentKey={key}
            onNestedChange={(nestedKey, nestedValue) => {
              const updatedNestedProps = {
                ...localProps,
                [key]: { ...localProps[key], [nestedKey]: nestedValue },
              };
              setLocalProps(updatedNestedProps);
              setProps(selectedComponent.id, updatedNestedProps);
            }}
          />
        )
      )}
    </div>
  );
};
