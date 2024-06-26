import React, { FC, InputHTMLAttributes, memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum InputSizeY{
    REGULAR = 'regular',
    COMPACT = 'compact',
}

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>{
    className?: string
    value?: string
    onChange?: (value: string) => void
    classNameBox?: string
    fullWidth?: boolean
    sizeY?: InputSizeY
}

export const Input = memo(({
    className, value, onChange, classNameBox, fullWidth = false, type = 'text', sizeY = InputSizeY.REGULAR, ...args
}: InputProps) => {
    const mods: Mods = { [cls.fullWidth]: fullWidth };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Box, {}, [classNameBox])}>
            <input
                onChange={onChangeHandler}
                value={value}
                type={type}
                className={classNames(cls.Input, mods, [className, cls[sizeY]])}
                {...args}
            />
        </div>
    );
});
