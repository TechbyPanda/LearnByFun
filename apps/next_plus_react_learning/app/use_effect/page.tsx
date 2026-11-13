'use client';
import { useEffect } from "react";

export default function UseEffectPage() {
    const tab = 1;
    
    return (
        <div>
            <h1>UseEffect Page</h1>
            {tab === 0 && <Sample1 />}
            {tab === 1 && <Sample2 />}
        </div>
    )
}

function Sample1() {

    useEffect(() => {
        console.log("Sample1 component mounted");
    })

    return (
        <div>
            <h1>Sample 1</h1>
            <p>This is a sample component.</p>
        </div>
    )
}

function Sample2() {

    useEffect(() => {
        console.log("Sample2 component mounted");
        return () => console.log("Sample2 component unmounted");
    }, [])

    return (
        <div>
            <h1>Sample 2</h1>
            <p>This is a sample component.</p>
        </div>
    )
}
