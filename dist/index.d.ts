import React from 'react';
import PropTypes from 'prop-types';
import { useLightbox } from './SRL/SRLHooks';
import SRLWrapper from './SRL/SRLWrapper';
declare const SimpleReactLightbox: {
    ({ children }: {
        children: React.ReactNode;
    }): import("@emotion/react/jsx-runtime").JSX.Element;
    propTypes: {
        children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactNodeLike>>>;
    };
};
export { SRLWrapper, useLightbox };
export default SimpleReactLightbox;
