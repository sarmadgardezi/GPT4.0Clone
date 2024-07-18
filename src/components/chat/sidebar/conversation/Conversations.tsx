import { useOpenAI } from "@/context/OpenAIProvider";
import Conversation from "./Conversation";
import { MdDeleteOutline } from "react-icons/md";

type Props = {};

export default function Conversations({}: Props) {
  const { conversations, conversationId, deleteConversation } = useOpenAI();

  return (
    <div className="flex-1 overflow-y-auto py-2 scrollbar-none">
      <div className="flex flex-col gap-y-2">
        {Object.keys(conversations).map((key) => (
          <div key={key} className="relative group">
            <Conversation
              id={key}
              conversation={conversations[key]}
              active={key === conversationId}
            />
           
          </div>
        ))}
      </div>
    </div>
  );
}
