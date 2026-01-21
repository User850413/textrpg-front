import React from 'react';
import MyHome from './MyHome';
import Forest from './Forest';

/**
 *  file : FieldRenderer.tsx
 *  page : 필드 렌더러
 *  updated at : 2026-01-16
 */

const fieldMap : Record<string, React.ComponentType> = {
    HOME: MyHome,
    FOREST: Forest,
}

const FieldRenderer = ({ fieldId } : { fieldId : string }) => {
    const FieldComponent = fieldMap[fieldId];

    if(!FieldComponent) {
        return <div>올바르지 않은 접근입니다.</div>
    }

    return <FieldComponent />;
};

export default FieldRenderer;