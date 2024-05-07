import { css } from "@emotion/css";
import InfoIcon from "@mui/icons-material/Info";
import CodeIcon from "@mui/icons-material/Code";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import { CodeModal } from "../header/modals/code-modal";
import { useState } from "react";
import { InfoModal } from "../header/modals/info-modal";
import { useGetGeneratedCode } from "../../hooks/use-get-generated-code";
import { useEditorState } from "../../store/useEditorStore";

const useStyles = () => ({
  wrapper: css({
    display: "flex",
  }),
});

export const HeaderActions = () => {
  const { components, removeComponent, selectedComponent } = useEditorState();
  const [openCodeModal, setOpenCodeModal] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const generatedCode = useGetGeneratedCode();
  const style = useStyles();

  return (
    <div className={style.wrapper}>
      <IconButton onClick={() => setOpenInfoModal(true)}>
        <InfoIcon sx={{ color: "white", fontSize: 32 }} />
      </IconButton>

      <IconButton
        onClick={() =>
          selectedComponent && removeComponent(selectedComponent.id)
        }
        disabled={!selectedComponent}
      >
        <ClearIcon
          sx={{ color: selectedComponent ? "white" : "#6f6f6f", fontSize: 32 }}
        />
      </IconButton>

      <IconButton
        onClick={() => setOpenCodeModal(true)}
        disabled={components.length === 0}
      >
        <CodeIcon
          sx={{
            color: components.length > 0 ? "white" : "#6f6f6f",
            fontSize: 32,
          }}
        />
      </IconButton>

      {openCodeModal && (
        <CodeModal
          code={generatedCode}
          open={openCodeModal}
          setOpen={setOpenCodeModal}
        />
      )}

      {openInfoModal && (
        <InfoModal open={openInfoModal} setOpen={setOpenInfoModal} />
      )}
    </div>
  );
};
