import {useEffect, useRef} from "react";

export const SVGPC = () => {
    const pathRef = useRef<SVGPathElement | null>(null);
    useEffect(() => {
        const handleScroll = () => {
            if (pathRef.current) {
                const scrollPercent = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
                const pathLength = pathRef.current.getTotalLength();
                const dashOffset = pathLength * (1 - (scrollPercent / 2.1));
                pathRef.current.style.strokeDasharray = `${pathLength} ${pathLength}`;
                pathRef.current.style.strokeDashoffset = dashOffset.toString();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 334 750" id="svgRoute"
             style={{position: 'absolute', zIndex: -1, width: '100%', height: 'auto'}}>
            <path id="path"
                  d="M150 0s0 0 0 0c0 0-0 0-0 150 0 250 250 100 150 370  S200 -250 -100 2000"
                  stroke="orange" fill="none" ref={pathRef}/>
        </svg>
    );
};