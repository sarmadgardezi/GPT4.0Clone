import React from "react";
import { useOpenAI } from "@/context/OpenAIProvider";
import { MdSend } from "react-icons/md";

type Props = {
  messageLimitReached: boolean;
  messageLimitPercentage: number;
};

export default function ChatInput({ messageLimitReached, messageLimitPercentage }: Props) {
  const { addMessage, loading } = useOpenAI();
  const textAreaRef = React.useRef<HTMLTextAreaElement>(null);

  const [input, setInput] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (loading) return;
    e.preventDefault();
    if (!messageLimitReached) {
      addMessage(input, true, "user");
      setInput("");
    }
  };

  React.useEffect(() => {
    const resize = () => {
      if (textAreaRef.current) {
        textAreaRef.current.style.height = "40px";
        textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      }
    };

    resize();
  }, [input]);

  // Handle submitting with enter
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e as any);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleSubmit]);

  const remainingMessages = 25 - messageLimitPercentage * 0.25; // Adjust this calculation according to your logic

  return (
    <div className="fixed bottom-0 flex h-40 w-full bg-gradient-to-t from-[rgb(var(--bg-secondary))] to-transparent md:w-[calc(100%-260px)]">
      <form
        className="mx-auto flex h-full w-full max-w-4xl flex-col items-end justify-center p-4 pb-10"
        onSubmit={handleSubmit}
      >
        <div className="w-full mb-2 text-center text-primary">
          You have {remainingMessages} out of 25 requests left.
        </div>
        <div className="w-full bg-gray-200 h-2 mb-2">
          <div
            className="bg-blue-600 h-2 transition-all duration-300"
            style={{ width: `${messageLimitPercentage}%` }}
          />
        </div>
        {messageLimitReached && (
          <div className=" mb-2 text-center text-red-600">
            You have reached the free message limit. Please purchase a plan to continue.
          </div>
        )}
        <div className="relative flex w-full flex-row rounded border border-stone-500/20 bg-tertiary shadow-xl">
          <textarea
            ref={textAreaRef}
            className="max-h-[200px] w-full resize-none border-none bg-tertiary p-4 text-primary outline-none"
            onChange={handleChange}
            value={input}
            rows={1}
            disabled={messageLimitReached}
          />
          <button
            type="submit"
            className="rounded p-4 text-primary hover:bg-primary/50"
            disabled={messageLimitReached}
          >
            {loading ? (
              <div className="mx-auto h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
            ) : (
              <MdSend />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
