export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-screen w-screen justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="border rounded flex flex-col items-center"
        style={{ width: "500px", height: "700px" }}
      >
        {children}
      </div>
    </div>
  );
}
