"use client"

import { Toaster } from "react-hot-toast";

export function ClientProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Toaster/>
            {children}
        </>
    );
}