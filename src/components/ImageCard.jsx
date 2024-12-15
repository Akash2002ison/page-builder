import { useNode } from "@craftjs/core";
import { Slider, FormControl, FormLabel, Input } from '@mui/material'
// eslint-disable-next-line react/prop-types
export const ImageCard = ({ url, imageSize }) => {
    const { connectors: { connect, drag } } = useNode((node) => ({
        isActive: node.events.selected
    }));
    return (
        <div ref={(ref) => connect(drag(ref))}>
            <img
                src={url ?? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoZtufXS1bc0uRJp2uXt6d1BOLMx108SoDw&s"}
                style={{
                    height: `${imageSize}px`,
                    width: `${imageSize}px`
                }}
            />
        </div>
    )
}

export const ImageCardSetting = () => {
    const { actions: { setProp }, props } = useNode((node) => ({
        props: node.data.props,
        imageSize: node.data.props.size,
    }));
    return (
        <>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">image size</FormLabel>
                <Slider
                    // eslint-disable-next-line react/prop-types
                    value={props.imageSize || 7}
                    step={20}
                    min={15}
                    max={150}
                    onChange={(_, value) => {
                        setProp(props => props.imageSize = value);
                    }}
                />
            </FormControl>
            <FormControl size="small" component="fieldset">
                <FormLabel component="legend">image url</FormLabel>
                {/* eslint-disable-next-line react/prop-types */}
                <Input defaultValue={props.url} onChange={(e) => setProp(props => props.url = e.target.value)}></Input>
            </FormControl>
        </>
    )
}

export default ImageCard


ImageCard.craft = {
    props: {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjoZtufXS1bc0uRJp2uXt6d1BOLMx108SoDw&s",
        imageSize: 70
    },
    related: {
        settings: ImageCardSetting
    }
}