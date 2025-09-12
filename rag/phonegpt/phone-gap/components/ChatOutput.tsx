"use client"
import {
    Message
} from 'ai'
import ReactMarkdown from 'react-markdown'
interface ChatOutputProps {
    messages: Message[];
    status: string
}

export default function ChatOutput({
    messages,
    status
}: ChatOutputProps) {
    return (
        <>
            {
                messages.map((message, index) => (
                    message.role === 'user' ? (
                        <UserChat content={message.content} key={index} />

                    ) : (
                        <AssistantChat content={message.content} key={index} />
                    )
                ))
            }
            {
                status === 'submitted' && (
                    <div className='text-muted-foreground'>Generating response...</div>
                )
            }
            {
                status === 'error' && (
                    <div className='text-red-500'>An error occurred. Please try again.</div>
                )
            }
        </>
    )
}

const UserChat = ({ content }: { content: string }) => {
    return (
        <div className='bg-muted rounded-2xl ml-auto max-w-[80%] w-fit px-3 py-2 mb-6'>
            {content}
        </div>
    )
}

const AssistantChat = ({ content }: { content: string }) => {
    return (
        <div className='pr-8 w-full mb-6 '>
            <ReactMarkdown
                components={{
                    a: ({ href, children }) => (
                        <a href={href} target="_blank" >{children}</a>
                    )
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    )
}