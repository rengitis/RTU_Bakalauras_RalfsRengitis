import { useDrop } from "react-dnd";

export const useDropComponent = () => {
  
    const [{ isOver }, dropzone] = useDrop(() => ({
      accept: "comp",
      drop: () => ({
        name: "dropZone",
      }),
      collect: (monitor) => ({
        isOver: monitor.isOver(),
      }),
    }));

    return { isOver, dropzone}
  };