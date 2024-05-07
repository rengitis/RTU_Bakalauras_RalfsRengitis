import { css } from "@emotion/css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@mui/material";

const useStyles = () => {
  return {
    wrapper: css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: 46,
      backgroundColor: "#00007d",
    }),
    actions: css({
      display: "flex",
      justifyContent: "flex-end",
      width: "100%",
      padding: "0px 20px",
    }),
  };
};

export const Footer = () => {
  const style = useStyles();

  return (
    <div className={style.wrapper}>
      <div className={style.actions}>
        <IconButton
          onClick={() =>
            window.open(
              "https://www.youtube.com/",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          <GitHubIcon sx={{ color: "white", fontSize: 28 }} />
        </IconButton>
      </div>
    </div>
  );
};
