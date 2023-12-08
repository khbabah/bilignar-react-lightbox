import React from 'react';
import PropTypes from 'prop-types';
interface IPortal {
    isOpened: boolean;
    children: React.ReactNode;
    className?: string;
}
declare const Portal: {
    ({ isOpened, children, className }: IPortal): React.ReactPortal | null;
    propTypes: {
        selector: PropTypes.Requireable<string>;
        isOpened: PropTypes.Requireable<boolean>;
        children: PropTypes.Validator<NonNullable<NonNullable<PropTypes.ReactNodeLike>>>;
    };
};
export default Portal;
