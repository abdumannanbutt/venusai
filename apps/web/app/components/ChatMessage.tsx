export default function ChatMessage({ message }: any) {
  return (
    <div
      className={`p-3 rounded ${
        message.role === "user" ? "bg-blue-600" : "bg-gray-700"
      }`}
    >
      {message.content}
    </div>
  );
}
