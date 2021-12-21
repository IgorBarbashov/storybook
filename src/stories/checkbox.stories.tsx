import React from 'react';
import { Checkbox, ICheckboxProps } from '../Components/Checkbox';

export default {
    title: 'Example/Checkbox',
    component: Checkbox
}

export const withLabel = (args: ICheckboxProps) => {
    const { label = 'Default label' } = args;

    return <Checkbox {...args} label={label} />
};

export const disabled = (args: ICheckboxProps) =>{
    return <Checkbox {...args} disabled />
};
