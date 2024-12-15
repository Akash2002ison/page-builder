import { Typography, Paper, Box } from '@mui/material';
import { Button } from '../src/components/Button';
import { Topbar } from '../src/components/Topbar';
import { Card, CardTop, CardBottom } from '../src/components/Card';
import { Container } from '../src/components/Container';
import { Toolbox } from '../src/components/Toolbox';
import { Text } from '../src/components/Text';
import { ImageCard } from './components/ImageCard';
import { SettingsPanel } from './components/SettingsPanel';
import Grid from "@mui/material/Grid2";
import { Editor, Frame, Element } from "@craftjs/core";

export default function App() {
  return (
    <div>
      <Typography variant="h5" align="center">A simple page editor</Typography>
      <Box sx={{ margin: "0 auto", width: "100%", maxWidth: "1400px" }}>
        {/* Topbar */}
        <Topbar />
        <Editor resolver={{ Card, Button, Text, Container, CardBottom, CardTop, ImageCard }}>
          {/* Main Content */}
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Left Side: Container */}
            <Grid size={8}>
              <Frame>
                <Element is={Container} padding={5} background="#eee" canvas>
                  <ImageCard></ImageCard>
                  <Card />
                  <Text fontSize={20} text={"hi world"} />
                  <Button variant="contained" text={"click me"}></Button>
                  <Element is={Container} padding={2} background="#999">
                    <Text size="small" text="It's me again!" />
                  </Element>
                </Element>
              </Frame>
            </Grid>

            {/* Right Side: Toolbox and SettingsPanel */}
            <Grid size={4}>
              <Paper sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
                <Toolbox />
                <SettingsPanel />
              </Paper>
            </Grid>
          </Grid>
        </Editor>
      </Box>
    </div>
  );
}
