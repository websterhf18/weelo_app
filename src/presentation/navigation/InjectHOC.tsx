/**
 * @author Hugo Garcia
 * @description High Order Component(HOC) to inject funcions on Screens
 * @returns 
 */
import React from 'react';

function InjectHOC<Props, F>(WrappedComponent: React.FC<Props & F>, slices: F) {
    const ComponentWithExtraInfo = (props: Props) => {
        return <WrappedComponent {...props} {...slices} />;
    };
    return ComponentWithExtraInfo;
}

export default InjectHOC;
