import { api } from "@/server/api";
import { UpdateText } from "./update-text";

export default async function GuidedbyexpertsPage() {
    const textFTC = await api.guidedbyexperts.get();
    const guidedbyexperts = textFTC.data?.guidedbyexperts?.[0] ?? null;
    
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Guided by experts editor</h1>
            <UpdateText guidedbyexperts={guidedbyexperts} />
        </div>
    );
}