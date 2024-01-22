import React from "react";

type ButtonProps = {
    buttonSize?: string;
    buttonBgColor?: string;
    buttonColor: string;
    children?: React.ReactNode;
    className?: string;
    url?: string;
}

function sayHello() {
    alert('You clicked me!');
}

class Button extends React.Component<ButtonProps> {
    render() {
        const { buttonSize, buttonBgColor, buttonColor, children, className, url } = this.props;
        const finalClassName = `inline-flex gap-2 rounded font-medium ${buttonSize ? buttonSize : 'px-4 py-2'} ${buttonBgColor ? buttonBgColor : 'bg-primary-700 hover:bg-primary-600'} ${buttonColor ? buttonColor : 'text-white'} ${className ? className : ''}`;
        let buttonElement;
        if (url) {
            buttonElement = (
                <a href={url}>
                    <button className={finalClassName}>
                        {children}
                    </button>
                </a>
            );
        } else {
            buttonElement = (
                <button className={finalClassName} onClick={sayHello}>
                    {children}
                </button>
            );
        }

        return buttonElement;
    }
}

export default Button;

