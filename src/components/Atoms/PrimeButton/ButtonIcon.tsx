import { Button } from 'primereact/button'
import React from "react";
import IconComponent from "../Icon/Index"

type PrimeButtonIconProps = {
    size?: string;
    primary: boolean;
    label?: string;
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
        const { size, url, primary, ...otherProps } = this.props;
        const className = `inline-flex gap-2 rounded font-medium ${size ? size : 'medium'} ${primary ? 'text-white bg-primary-700 hover:bg-primary-600' : 'text-white bg-secondary-600 hover:bg-gray-700'}`;

        const buttonElement = (
            <Button 
                onClick={url ? undefined : this.sayHello}
                label= {this.props.label}
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
