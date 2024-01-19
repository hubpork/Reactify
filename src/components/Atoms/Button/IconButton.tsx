import React from "react";
import Button from "./Button"
import Icon from "../Icon/Index"

type ButtonProps = {
  label?: string;
  buttonBgColor: string;
  buttonColor: string;
  children: string;
  iconName: string;
  iconColor: string;
  iconSize: number;
}

class IconButton extends React.Component<ButtonProps> {
   render() {
       return (
           <Button buttonBgColor={this.props.buttonBgColor} buttonColor={this.props.buttonColor}>
               <Icon iconName={this.props.iconName} color={this.props.iconColor} size={this.props.iconSize} />
               {this.props.children}
           </Button>
       );
   }
}

export default IconButton;
