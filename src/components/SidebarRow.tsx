import { usePathname, useRouter } from "next/navigation";

import { DocumentData } from "firebase/firestore";
import Spinner from "react-spinkit";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

type SidebarRowProps = {
    doc: DocumentData
}

export function SidebarRow({ doc }: SidebarRowProps) {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = pathname.includes(doc.id);

    return (
        <li
            onClick={() => router.push(`/search/${doc.id}`)}
            className={`flex flex-col md:flex-row gap-2 justify-between p-4 cursor-pointer hover:bg-white hover:shadow-md rounded-lg
            ${isActive && 'bg-white shadow-md'}`}
        >
            <div className="flex flex-col justify-center">
                <p className="text-xs md:text-base font-bold">
                   { doc.data().search } 
                </p>
                {doc.data().status === 'pending' && (
                    <p className="text-xs">
                        Scraping information
                    </p>
                )}
            </div>

            <span className="-order-2 md:order-1">
                {doc.data().status === 'pending' ? (
                    <Spinner
                        name="cube-grid"
                        color="indigo"
                        fadeIn="none"
                    />
                ) : (
                    <CheckCircleIcon
                        className="h-6 w-6 text-green-500"
                    />
                )}
            </span>
        </li>
    );
}