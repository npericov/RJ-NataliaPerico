import React from 'react';

const Spinner = () => {
    return (
    <div className="flex items-center justify-center flex-col gap-8 mt-4">
        <div className="animate-spin rounded-full h-40 w-40 border-t-4 border-tecnica"></div>
    </div>
    );
};

export default Spinner;
