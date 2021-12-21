import React, { FC } from 'react';

export interface ICheckboxProps {
    id: string;
    label: string;
    onChange: (checked: boolean) => void;
    isChecked: boolean;
    disabled?: boolean;
}

const Checkbox: FC<ICheckboxProps> = ({
    id,
    label,
    onChange,
    isChecked,
    disabled = false
}) => {
    return (
        <label htmlFor={id}>
            <input
                id={id}
                type="checkbox"
                onChange={e => onChange(e.target.checked)}
                checked={isChecked}
                disabled={disabled}
                />
            <span>{label}</span>
        </label>
    );
}

export {
    Checkbox
}
