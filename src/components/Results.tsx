import Image from "next/image";
import Link from "next/link";

type ResultProps = {
    results: Product[]
}

export function Results({ results }: ResultProps) {
    return (
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
            {results.map(item => (
                <Link
                    href={item.url}
                    key={item.title}
                    className="flex flex-col space-x-4 w-full bg-white rounded-lg shadow-md p-5"
                >
                    <div className="relative h-40 w-full">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain py-5"
                        />
                    </div>

                    <div className="flex flex-col py-5 flex-1">
                        <p className="font-bold">
                            {item.title}
                        </p>
                        <p className="text-sm text-gray-500">
                            {item.rating} ({ item.reviews } reviews)
                        </p>

                        <div className="flex space-x-2 justify-end flex-1">
                            <p className="font-bold text-indigo-500 pt-2 text-xl mt-auto">
                                {item.price > 0 ? `$${item.price}` : 'N/A'}
                            </p>

                            { item.previous_price > 0 && (
                                <p className="font-bold text-indigo-500/50 line-through pt-2 text-xl mt-auto">
                                    ${item.previous_price}
                                </p>   
                            )}
                        </div>

                        <div className="flex flex-wrap gap-2 justify-end mt-5">
                            { item.features.map(feature=> feature ? (
                                <p
                                    key={feature}
                                    className="text-xs bg-indigo-500 px-2 py-1 text-white rounded-md"
                                >
                                    { feature }
                                </p>
                            ) : null) }
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}