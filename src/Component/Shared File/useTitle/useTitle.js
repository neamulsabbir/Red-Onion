import React, { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title= `${title} - Red Onion`
    },[title])
};

export default useTitle;