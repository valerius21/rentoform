import React, { useState, useEffect } from 'react';

export function useElementScroll(elementRef: any) {
    const [state, setState] = useState({ x: null, y: null });

    useEffect(() => {
        const element = elementRef.current;

        if (element) {
            const handleScroll = () => {
                setState({ x: element.scrollLeft, y: element.scrollTop });
            };

            handleScroll();
            element.addEventListener("scroll", handleScroll, { passive: true });

            return () => {
                element.removeEventListener("scroll", handleScroll);
            };
        }
    }, [elementRef]);

    return [state];
}
