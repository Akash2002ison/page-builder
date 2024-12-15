import { Text } from "./Text";
import { Button } from "./Button";
import { Container } from "./Container";
import { Element } from "@craftjs/core";
import { useNode } from "@craftjs/core";
import { ContainerSettings, ContainerDefaultProps } from "./Container";
// Notice how CardTop and CardBottom do not specify the drag connector. This is because we won't be using these components as draggables; adding the drag handler would be pointless.

// eslint-disable-next-line react/prop-types
export const CardTop = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardTop.craft = {
    props: ContainerDefaultProps,
    rules: {
        // Only accept Text
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Text || Image)
    }
}

// eslint-disable-next-line react/prop-types
export const CardBottom = ({ children }) => {
    const { connectors: { connect } } = useNode();
    return (
        <div ref={connect}>
            {children}
        </div>
    )
}

CardBottom.craft = {
    props: ContainerDefaultProps,
    rules: {
        // Only accept Buttons
        canMoveIn: (incomingNodes) => incomingNodes.every(incomingNode => incomingNode.data.type === Button)
    }
}

// eslint-disable-next-line react/prop-types
export const Card = ({ background, padding = 20 }) => {
    return (
        <Container background={background} padding={padding}>
            <Element id="text" is={CardTop} canvas>
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Element>
            <Element id="buttons" is={CardBottom} canvas>
                <Button size="small" text={"learn more"}></Button>
            </Element>
        </Container>
    )
}

Card.craft = {
    props: { ...ContainerDefaultProps },
    related: {
        // Since Card has the same settings as Container, we'll just reuse ContainerSettings 
        settings: ContainerSettings
    }
}