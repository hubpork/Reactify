import React from "react";
import Button from "./Button"
import IconComponent from "../Icon/Index"

type ButtonProps = {
    label?: string;
    buttonSize?: string;
    buttonBgColor: string;
    buttonColor: string;
    children: string;
    url?: string;
    iconName: string;
    iconColor: string;
    iconSize?: string;
    iconIsRight?: boolean
}

class IconButton extends React.Component<ButtonProps> {
    render() {
        const { buttonSize, buttonBgColor, buttonColor, url, ...otherProps } = this.props;
        const className = `gap-2 items-center ${buttonBgColor} ${buttonColor}`;
        return (
            <Button url={url} buttonSize={buttonSize} buttonBgColor={buttonBgColor} buttonColor={buttonColor} className={className}>
                <IconComponent {...otherProps} />
                {this.props.children}
            </Button>
        );
    }
}
export default IconButton;
