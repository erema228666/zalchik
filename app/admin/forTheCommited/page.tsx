
import { api } from "@/server/api";
import { UpdateText } from "./update-text";

export default async function ForTheCommitedPage() {
    const textFTC = await api.forthecommited.get();
    const forTheCommited = textFTC.data?.forthecommited?.[0] ?? null;
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">For the commited text editor</h1>
            <UpdateText forTheCommited={forTheCommited} />
        </div>
    );
}