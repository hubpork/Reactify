import { Button } from 'primereact/button'
import React from "react";
import IconComponent from "../Icon/Index"

type PrimeButtonIconProps = {
    buttonSize?: string;
    buttonBgColor?: string;
    buttonColor: string;
    children?: string;
    extendClassName?: string;
    url?: string;

    iconName: string;
    iconColor?: string;
    iconSize?: string;
    iconIsRight?: boolean
}

class PrimeButtonIcon extends React.Component<PrimeButtonIconProps> {
    sayHello = () => {
        alert("Hello!");
    };
    render() {
        const { buttonSize, buttonBgColor, buttonColor, url, ...otherProps } = this.props;
        const className = `inline-flex gap-2 rounded font-medium ${buttonSize ? buttonSize : 'px-4 py-2'} ${buttonBgColor ? buttonBgColor : 'bg-primary-700 hover:bg-primary-600'} ${buttonColor ? buttonColor : 'text-white'}`;

        
        const buttonElement = (
            <Button 
                onClick={url ? undefined : this.sayHello}
                label= {this.props.children}
                pt={{
                    root: {className}
                }}
            >
                <IconComponent {...otherProps} />
            </Button>
        );

        return url ? (
            <a href={url} className="inline-flex">
                {buttonElement}
            </a>
        ) : buttonElement;
    }
}

export default PrimeButtonIcon;
