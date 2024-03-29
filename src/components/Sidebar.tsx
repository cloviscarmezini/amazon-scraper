"use client"

import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../../firebase";
import { SidebarRow } from "./SidebarRow";

export function Sidebar() {
    const [snapshot, loading, error] = useCollection(
        query(collection(db, 'searches'), orderBy('start_eta', 'desc'))
    );

    return (
        <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50 ">
            <div className="flex flex-col items-center justify-center mb-10">
                <DocumentMagnifyingGlassIcon
                    className="h-16 w-16 text-indigo-600"
                />

                <h1 className="hidden md:inline text-center text-3xl my-2 font-bold">
                    Web Scraper
                </h1>
                <h2 className="hidden md:inline text-center text-xs italic">
                    Scraping the Unscrapable
                </h2>
            </div>

            <ul className="flex flex-col gap-2 py-2">
                { snapshot?.docs.map(doc=>(
                    <SidebarRow key={doc.id} doc={doc} />
                ))}
            </ul>
        </div>
    );
}