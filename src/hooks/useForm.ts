import React, { useState } from 'react';

export function useForm<T extends Record<string, any>>(initialState: T){
    const [form, setForm] = useState<T>(initialState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }))
    }

    return { form, setForm, onChange };
};
