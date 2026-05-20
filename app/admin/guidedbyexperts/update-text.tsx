"use client";

import { Button } from "@/components/ui/button";
import { api } from "@/lib/client/api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function UpdateText({ guidedbyexperts }: any) {
    const [text, setText] = useState(guidedbyexperts?.text ?? '');
    const id = guidedbyexperts?.id;
    
    const updateMutation = useMutation({
        mutationKey: ['guidedbyexperts', 'update'],
        mutationFn: async () => {
            if (id) {
                const res = await api.guidedbyexperts({ id }).put({
                    text: text,
                });
                if (res.error) throw res.error;
            } else {
                const res = await api.guidedbyexperts.post({
                    text: text,
                });
                if (res.error) throw res.error;
            }
        },
        onSuccess: () => {
            toast.success('Текст блока успешно обновлен');
        },
        onError: () => {
            toast.error('Не удалось обновить текст блока');
        },
    });
    
    
    return (
        <div className="flex flex-col gap-4">
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full min-h-[150px] p-3 border rounded-lg"
                placeholder="Введите текст..."
            />
            <Button
                disabled={!text}
                loading={updateMutation.isPending}
                className="w-32"
                onClick={() => updateMutation.mutate()}
            >
                Сохранить
            </Button>
        </div>
    );
}