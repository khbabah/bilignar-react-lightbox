import React from 'react';
import { IState } from '../../types';
declare const SRLCtx: React.Context<IState>;
type TSRLContextComponent = {
    children: React.ReactNode;
};
declare const SRLContextComponent: React.FC<TSRLContextComponent>;
export { SRLCtx };
export default SRLContextComponent;
