import React from 'react';
import { useParams } from 'react-router-dom';
import FieldRenderer from '../FieldRenderer';

/**
 *  file : FieldLayout.tsx
 *  page : 필드 레이아웃
 *  updated at : 2026-01-16
 */
const FieldLayout = () => {
    let {fieldId} = useParams();
    if(!fieldId) fieldId = "HOME"

    return <FieldRenderer fieldId={fieldId} />
};

export default FieldLayout;