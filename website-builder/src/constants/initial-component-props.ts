import image from "../assets/image-placeholder.png";
import { ComponentTypes } from "./component-types";

export const initalComponentProps = {
  [ComponentTypes.TEXT]: {
    props: {
      text: "Enter text here",
      style: {
        height: "",
        width: "",
        margin: "8px",
        padding: "8px",
        alignSelf: "center",
        border: "",
        borderRadius: "",
        fontSize: "24px",
        fontWeight: "normal",
        color: "",
        backgroundColor: "",
      },
    },
  },

  [ComponentTypes.TEXTFIELD]: {
    props: {
      placeholder: "Enter text here",
      style: {
        width: "",
        height: "",
        margin: "8px",
        padding: "8px",
        alignSelf: "center",
        borderRadius: "8px",
        border: "1px solid #cccccc",
        backgroundColor: "whitesmoke",
        outline: "none",
        textAlign: "center",
        fontSize: "",
      },
    },
  },

  [ComponentTypes.BUTTON]: {
    props: {
      text: "Enter text here",
      style: {
        width: "",
        height: "",
        margin: "8px",
        padding: "8px",
        alignSelf: "center",
        color: "whitesmoke",
        backgroundColor: "#333333",
        fontSize: "14px",
        fontWeight: "500",
        textAlign: "center",
        border: "",
        borderRadius: "8px",
        borderWidth: "0",
        cursor: "pointer",
      },
    },
  },

  [ComponentTypes.IMG]: {
    props: {
      url: image,
      style: {
        height: "",
        width: "300px",
        margin: "8px",
        padding: "",
        border: "",
        borderRadius: "8px",
        alignSelf: "center",
      },
    },
  },
};
