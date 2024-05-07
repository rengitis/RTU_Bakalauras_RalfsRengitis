import { Dispatch } from "react";
import { Dialog, DialogContent, Typography } from "@mui/material";

export const InfoModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          ".MuiDialog-paper": {
            borderRadius: 4,
            maxWidth: 900,
          },
        }}
      >
        <DialogContent sx={{ padding: "40px 25px 30px" }}>
          <Typography variant="h4" fontWeight={700} pb={4}>
            Website Builder
          </Typography>

          <Typography variant="body1" pb={2}>
            Create your own website design from scratch.
          </Typography>

          <Typography variant="body1" pb={2}>
            In this project users has the possibility to create their own
            website design from scratch with premade components that also can be
            easily customized further using the built in css style editor.
          </Typography>

          <Typography variant="body1" pb={2}>
            To add a component simply just drag and drop it on the work area.
          </Typography>

          <Typography variant="body1" pb={2}>
            To style a component press on the component you would like to style
            and you'll see in the bottom right corner avaliable styles for
            component to edit.
          </Typography>

          <Typography variant="body1" pb={2}>
            To delete a component simply just press on the component you want to
            delete and pres on the X icon.
          </Typography>

          <Typography variant="body1" pb={4}>
            When the created website design is ready user can find the generated
            code in top right corner by pressing on the {"< > "}
            icon. There you will be able to find raedy to use React code for
            your project
          </Typography>

          <Typography variant="body2">
            Fell free to checkout this project in GitHub. You can find the link
            for it in the bottom right corner.
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};
