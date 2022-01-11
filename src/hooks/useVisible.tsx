import React, {useEffect, useRef, useState} from 'react';

export default function useVisible(ref : any) {
    const [isOnScreen, setIsOnScreen] = useState(false);

    const observer = new IntersectionObserver(([entry]) => setIsOnScreen(entry.isIntersecting));

    useEffect(() => {
        observer.observe(ref.current)
        return () => {observer.disconnect()}
    }, [])

    return isOnScreen;
}