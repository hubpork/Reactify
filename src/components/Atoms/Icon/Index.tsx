import React from 'react';

interface IconProps {
 iconName: string;
 color?: string;
 size?: number;
}

class Icon extends React.Component<IconProps> {
    render() {
        const { iconName, color, size } = this.props;
        return (
            <i className={`fa ${iconName}`} style={{color, fontSize: size}}></i>
        );
    }
}

export default Icon; 