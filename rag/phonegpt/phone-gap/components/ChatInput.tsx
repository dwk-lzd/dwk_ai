"use client"
import {
    Input
} from '@/components/ui/input'
import {
    Button
} from '@/components/ui/button'
import {
    ArrowUp
} from 'lucide-react'

interface ChatInputProps {
    input: string,
    handleInputChange: any,
    handleSubmit: any
}
export default function ChatIutput({
    input,
    handleInputChange,
    handleSubmit,
}: ChatInputProps) {
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
                onChange={handleInputChange}
                value={input}
                placeholder="Ask me something about phone..."
            />
            <Button>
                <ArrowUp />
                <span className='sr-only'>Submit</span>
            </Button>
        </form>
    )
}

