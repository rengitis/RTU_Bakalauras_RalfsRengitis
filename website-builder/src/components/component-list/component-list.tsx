import { ComponentCard } from "./component-card";
import ImageIcon from "@mui/icons-material/Image";
import SmartButtonTwoToneIcon from "@mui/icons-material/SmartButtonTwoTone";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import Crop169Icon from "@mui/icons-material/Crop169";
import { css } from "@emotion/css";
import { ComponentTypes } from "../../constants/component-types";

const useStyles = () => ({
  wrapper: css({
    border: "2px solid gray",
    borderRadius: 12,
    padding: 20,
    margin: 6,
    backgroundColor: "#f2f2f2",
  }),
  title: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 24,
    paddingBottom: 20,
  }),
  list: css({
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  }),
});

export const ComponentList = () => {
  const style = useStyles();

  return (
    <div className={style.wrapper}>
      <div className={style.title}>Components</div>
      <div className={style.list}>
        <ComponentCard
          title="Text"
          icon={<TextFieldsIcon />}
          type={ComponentTypes.TEXT}
          element="div"
        />
        <ComponentCard
          title="Text Field"
          icon={<Crop169Icon />}
          type={ComponentTypes.TEXTFIELD}
          element="input"
        />
        <ComponentCard
          title="Button"
          icon={<SmartButtonTwoToneIcon />}
          type={ComponentTypes.BUTTON}
          element="button"
        />
        <ComponentCard
          title="Image"
          icon={<ImageIcon />}
          type={ComponentTypes.IMG}
          element="img"
        />
      </div>
    </div>
  );
};
