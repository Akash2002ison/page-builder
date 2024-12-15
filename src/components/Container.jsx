import Paper from "@mui/material/Paper";
import { useNode } from "@craftjs/core";
import { FormControl, FormLabel, Slider } from "@mui/material";
import { ChromePicker } from "react-color";

// eslint-disable-next-line react/prop-types
export const Container = ({ background, padding = 0, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <Paper ref={ref => connect(drag(ref))} style={{ background, padding: `${padding}px`, whiteSpace: 4 }}>
      {children}
    </Paper>
  )
}

export const ContainerSettings = () => {
  const { background, padding, actions: { setProp } } = useNode(node => ({
    background: node.data.props.background,
    padding: node.data.props.padding
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <ChromePicker
          color={background || '#000'}
          onChange={color => {
            setProp(props => props.background = color.hex) // Correct: Use `color.hex`
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider defaultValue={padding} onChange={(_, value) => setProp(props => props.padding = value)} />
      </FormControl>
    </div>
  )
}

export const ContainerDefaultProps = {
  background: "#ffffff",
  padding: 3,
};

Container.craft = {
  props: ContainerDefaultProps,
  related: {
    settings: ContainerSettings
  }
}