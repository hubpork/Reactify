import React from "react";

type NativeButtonProps = {
    buttonSize?: string;
    buttonBgColor?: string;
    buttonColor: string;
    children?: React.ReactNode;
    extendClassName?: string;
    url?: string;
}

function sayHello() {
    alert('You clicked me!');
}

class NativeButton extends React.Component<NativeButtonProps> {
    render() {
        const { buttonSize, buttonBgColor, buttonColor, children, extendClassName, url } = this.props;
        const className = `inline-flex gap-2 rounded font-medium ${buttonSize ? buttonSize : 'px-4 py-2'} ${buttonBgColor ? buttonBgColor : 'bg-primary-700 hover:bg-primary-600'} ${buttonColor ? buttonColor : 'text-white'} ${extendClassName ? extendClassName : ''}`;
        let buttonElement;
        if (url) {
            buttonElement = (
                <a href={url}>
                    <button className={className}>
                        {children}
                    </button>
                </a>
            );
        } else {
            buttonElement = (
                <button className={className} onClick={sayHello}>
                    {children}
                </button>
            );
        }

        return buttonElement;
    }
}

export default NativeButton;

