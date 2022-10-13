import { AnyAction } from '@reduxjs/toolkit';

export interface ModelInterface {
    id: string;
    text: string;
    isFinished: boolean;
}

export interface AppInterface {
    labelText?: string;
    addHandler: (v: string) => AnyAction;
    removeHandler: (v: string) => AnyAction;
    updateHandler: (v: ModelInterface) => AnyAction;
    selectorState: ModelInterface[];
}
