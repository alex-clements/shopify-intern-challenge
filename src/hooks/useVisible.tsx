import React, {useEffect, useState} from 'react';

/**
 * Custom hook to indicate if a component is visible on the screen.
 * @param ref React Mutable Reference Obejct
 * @returns boolean.
 */
export default function useVisible(ref : any) {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));

    useEffect(() => {
        observer.observe(ref.current)
        return () => {observer.disconnect()}
    }, [])

    return isOnScreen;
}