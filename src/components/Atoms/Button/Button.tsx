import React from "react";

type ButtonProps = {
    buttonBgColor: string;
    buttonColor: string;
    children?: React.ReactNode;
}

class Button extends React.Component<ButtonProps> {
   render() {
       return (
           <button className={`px-4 py-2 inline-flex gap-2 rounded mr-auto mt-auto ${this.props.buttonBgColor} ${this.props.buttonColor}`}>
               {this.props.children}
           </button>
       );
   }
}

export default Button;