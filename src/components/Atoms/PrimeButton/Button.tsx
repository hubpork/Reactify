import { Button } from 'primereact/button'
import React from "react";
type PrimeButtonProps = {
    size?: string;
    primary: boolean;
    label?: string;
    url?: string;
}
class PrimeButton extends React.Component<PrimeButtonProps> {
    sayHello = () => {
        alert("Hello!");
    };
    render() {
        const { size, url, primary, label } = this.props;
        const className = `inline-flex gap-2 rounded font-medium ${size ? size : 'medium'} ${primary ? 'text-white bg-primary-700 hover:bg-primary-600' : 'text-white bg-secondary-600 hover:bg-gray-700'}`;

        const buttonElement = (
            <Button 
                onClick={url ? undefined : this.sayHello}
                label={label}
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
