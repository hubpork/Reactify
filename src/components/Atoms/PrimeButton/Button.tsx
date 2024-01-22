import { Button } from 'primereact/button'
import React from "react";
type PrimeButtonProps = {
    buttonSize?: string;
    buttonBgColor?: string;
    buttonColor: string;
    children?: string;
    extendClassName?: string;
    url?: string;
}
class PrimeButton extends React.Component<PrimeButtonProps> {
    sayHello = () => {
        alert("Hello!");
    };
    render() {
        const { buttonSize, buttonBgColor, buttonColor, url, children } = this.props;
        const className = `inline-flex gap-2 rounded font-medium ${buttonSize ? buttonSize : 'px-4 py-2'} ${buttonBgColor ? buttonBgColor : 'bg-primary-700 hover:bg-primary-600'} ${buttonColor ? buttonColor : 'text-white'}`;

        const buttonElement = (
            <Button 
                onClick={url ? undefined : this.sayHello}
                label= {children}
                pt={{
                    root: {className}
                }}
            >
            </Button>
        );

        return url ? (
            <a href={url} className="inline-flex">
                {buttonElement}
            </a>
        ) : buttonElement;
    }
}

export default PrimeButton;
