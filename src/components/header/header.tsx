import { css } from "@emotion/css";
import ScreenshotMonitorOutlinedIcon from "@mui/icons-material/ScreenshotMonitorOutlined";
import { HeaderActions } from "./header-actions";

const useStyles = () => {
  return {
    wrapper: css({
      display: "flex",
      width: "100%",
      height: 64,
      backgroundColor: "#00007d ",
    }),
    leftSide: css({
      display: "flex",
      width: "100%",
      padding: "0px 10px",
    }),
    title: css({
      display: "flex",
      alignItems: "flex-end",
      fontSize: 36,
      color: "white",
      padding: "0px 10px",
    }),
    rightSide: css({
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0px 15px",
    }),
  };
};

export const Header = () => {
  const style = useStyles();

  return (
    <div className={style.wrapper}>
      <div className={style.leftSide}>
        <ScreenshotMonitorOutlinedIcon sx={{ color: "white", fontSize: 64 }} />
        <div className={style.title}>Website Builder</div>
      </div>
      <div className={style.rightSide}>
        <HeaderActions />
      </div>
    </div>
  );
};
