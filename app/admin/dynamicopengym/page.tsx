import { api } from "@/server/api";
import { UpdateText } from "./update-text";

export default async function ForTheCommitedPage() {
    const textFTC = await api.dynamicopengym.get();
    const dynamicopengym = textFTC.data?.dynamicopengym?.[0] ?? null;
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Dynamic open gym text editor</h1>
            <UpdateText dynamicopengym={dynamicopengym} />
        </div>
    );
}