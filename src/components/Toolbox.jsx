import { Box, Typography, Button as MaterialButton } from "@mui/material";
import { Button } from './Button';
import { Card } from './Card';
import { Container } from './Container';
import { Element, useEditor } from "@craftjs/core";
import { Text } from './Text';
import Grid from "@mui/material/Grid2";
import { ImageCard } from "./ImageCard";

export const Toolbox = () => {
  // eslint-disable-next-line no-unused-vars
  const { connectors, query } = useEditor();

  return (
    <Box px={2} py={2}>
      <Grid container direction="column" alignItems="center" justify="center" spacing={1}>
        <Box pb={2}>
          <Typography>Drag to add</Typography>
        </Box>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Button text="Click me" size="small" />)} variant="contained">Button</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Text text="Hi world" />)} variant="contained">Text</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Element is={Container} padding={20} canvas />)} variant="contained">Container</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <Card />)} variant="contained">Card</MaterialButton>
        </Grid>
        <Grid container direction="column" item>
          <MaterialButton ref={ref => connectors.create(ref, <ImageCard />)} variant="contained">Image</MaterialButton>
        </Grid>
      </Grid>
    </Box>
  )
};