import React from "react";
import NativeButton from "./Button"
import IconComponent from "../Icon/Index"

type NativeButtonIconProps = {
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

class NativeButtonIconButton extends React.Component<NativeButtonIconProps> {
    render() {
        const { buttonSize, buttonBgColor, buttonColor, url, ...otherProps } = this.props;
        const extendClassName = `gap-2 items-center ${buttonBgColor} ${buttonColor}`;
        return (
            <NativeButton url={url} buttonSize={buttonSize} buttonBgColor={buttonBgColor} buttonColor={buttonColor} extendClassName={extendClassName}>
                <IconComponent {...otherProps} />
                {this.props.children}
            </NativeButton>
        );
    }
}
export default NativeButtonIconButton;
