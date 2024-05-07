import { Dispatch, useState } from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Typography,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckIcon from "@mui/icons-material/Check";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeModal = ({
  code,
  open,
  setOpen,
}: {
  code: string;
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [copied, setCopied] = useState(false);
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          ".MuiDialog-paper": {
            borderRadius: 4,
            maxWidth: 900,
            minWidth: 600,
            minHeight: 400,
          },
        }}
      >
        <DialogActions sx={{ justifyContent: "space-between" }}>
          <Typography variant="body1" pl={2}>
            Generated Code
          </Typography>
          <IconButton onClick={() => copyCode(code)} sx={{ paddingRight: 2 }}>
            {copied ? (
              <CheckIcon style={{ color: "green", fontSize: 24 }} />
            ) : (
              <ContentCopyIcon style={{ color: "black", fontSize: 24 }} />
            )}
          </IconButton>
        </DialogActions>

        <DialogContent sx={{ padding: 0 }}>
          <SyntaxHighlighter
            style={dracula}
            language="jsx"
            customStyle={{
              minHeight: "400px",
              margin: 0,
              padding: 24,
              borderRadius: 0,
            }}
          >
            {code}
          </SyntaxHighlighter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
