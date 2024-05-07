import { create } from "zustand";
import { produce } from "immer";
import { ComponentTypes } from "../constants/component-types";

export interface ComponentProps {
  id: string;
  type: ComponentTypes;
  props: Record<string, any>
  element: string;
}

  interface EditorState {
    components: ComponentProps[];
    addComponent: (component: ComponentProps) => void;
    setProps: (id: string, props: Record<string, any>) => void;
    selectedComponent : ComponentProps | null;
    setSelectedComponent: (id: string) => void;
    removeComponent: (id: string) => void;
  }
  

  export const useEditorState = create<EditorState>((set) => ({
  components: [],

  addComponent: (component) => set((state) => ({ components: [...state.components, component] })),

  setProps: (id, props) =>
    set((prev) => {
      return produce(prev, (prevCopy) => {
        const compIndex = prev.components.findIndex((ele) => ele.id === id);
        if (compIndex === -1) {
          throw new Error('Invalid id');
        }
        prevCopy.components[compIndex].props = props;
      });
    }),

    selectedComponent: null,
    setSelectedComponent: (id) => set((prev) => produce(prev, (prevCopy) => {
        const compIndex = prev.components.findIndex(ele => ele.id === id)
        if (compIndex === -1) {
            throw new Error("Invalid id")
        }
        prevCopy.selectedComponent = prevCopy.components[compIndex]
    })),
    
    removeComponent: (id) =>
      set((prev) => {
        return produce(prev, (prevCopy) => {
          const compIndex = prev.components.findIndex((ele) => ele.id === id);
          if (compIndex !== -1) {
            prevCopy.components.splice(compIndex, 1);
          }
          if (prevCopy.selectedComponent?.id === id) {
            prevCopy.selectedComponent = null;
          }
        });
      }),
}));