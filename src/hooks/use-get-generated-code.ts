import { ComponentProps, useEditorState } from "../store/useEditorStore";

export const useGetGeneratedCode = () => {
  const { components } = useEditorState();
  
  const styleToString = (styleObj: Record<string, string>) => {
    const styleProps = Object.entries(styleObj)
      .filter(([_, value]) => value !== "")
      .map(([key, value]) => `${key}: '${value}'`)
      .join(", ");
    return `{${styleProps}}`;
  };

  
    const generateComponentString = (comp: ComponentProps) => {

      const props = Object.entries(comp.props)
        .filter(([key]) => key !== "text" && key !== "style")
        .map(([key, value]) => `${key}="${value}"`)
        .join(" ");
  
      const styleProps = comp.props.style
        ? `style={${styleToString(comp.props.style)}}`
        : "";

      const textContent = comp.props.text ? comp.props.text : "";

      const isSelfClosing = ["input", "img"].includes(comp.element);
  
      return `<${comp.element} ${props} ${styleProps}${
        isSelfClosing ? " />" : `>${textContent}</${comp.element}>`}`;
    };
  
    let generatedCode = `export const App = () => {
      return (
        <div style={{display: "flex", flexDirection: "column"}}>
          ${components.map(generateComponentString).join("\n        ")}
        </div>
      );
    }`;
  
    return generatedCode
  };
  