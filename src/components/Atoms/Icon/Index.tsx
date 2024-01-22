import React from 'react';
import clsx from 'clsx';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';

const iconsMapping: { [key: string]: React.ElementType } = {
    ...FaIcons,
    ...IoIcons,
    // Add more libraries as needed
};

interface IconProps {
 iconName: string;
 iconColor?: string;
 iconSize?: string;
 iconIsRight?: boolean
}

/*
    The iconColor prop in your IconComponent is being interpreted as a string literal, not as a variable. 
    That's why it's not being recognized as a Tailwind CSS class.
*/

class IconComponent extends React.Component<IconProps> {
    render() {
        const { iconName, iconColor, iconSize, iconIsRight } = this.props;
        const Icon = iconsMapping[iconName];
        const className = clsx(`${iconColor} ${iconSize} ${iconIsRight ? 'order-2' : 'order-first'}`);
        return <Icon className={className} />;
    }
}

export default IconComponent;