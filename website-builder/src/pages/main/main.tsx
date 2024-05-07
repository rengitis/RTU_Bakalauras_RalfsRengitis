import { css } from "@emotion/css";
import { ComponentList } from "../../components/component-list/component-list";
import { VisualModal } from "../../components/visual-modal/visual-modal";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { StyleEditor } from "../../components/style-editor/style-editor";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";

const useStyles = () => {
  return {
    wrapper: css({
      display: "grid",
      gridTemplateRows: "auto 1fr auto",
      minHeight: "100vh",
    }),
    visualModal: css({
      width: "100%",
      minHeight: "100%",
      display: "grid",
      gridTemplateColumns: "75% 25%",
    }),
    tools: css({
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }),
  };
};

export const Main = () => {
  const styles = useStyles();
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.visualModal}>
          <VisualModal />
          <div className={styles.tools}>
            <ComponentList />
            <StyleEditor />
          </div>
        </div>
        <Footer />
      </div>
    </DndProvider>
  );
};
