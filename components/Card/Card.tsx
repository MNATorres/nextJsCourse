import Image from 'next/image';
import cardStyles from "./Card.module.css"

export interface CardData {
    name: string;
    type?: string;
    created: string;
    image?: string;
}

interface Props {
    data: CardData;
}

export default function Card({ data }: Props) {
    return (
        <div className={cardStyles.Card}>
            <p>Name: {data.name}</p>
            <p>Type: {data.type ? data.type : "No type"}</p>
            <p>Created: {data.created}</p>
            {!!data.image && (
                <Image width="100" height="100" alt="Image" src={data.image} />
            )}
        </div>
    )
}
