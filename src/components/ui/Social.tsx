import { ReactNode } from "react";

interface SocialI {
    icon: ReactNode,
    url: string;
}

export default function Social ({ icon, url }: SocialI) {
    return <a href={url} target="_blank"> 
        {icon}
    </a>
}