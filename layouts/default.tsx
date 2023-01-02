export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex flex-col h-full justify-between items-center"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
