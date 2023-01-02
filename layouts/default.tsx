export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="flex h-screen w-screen justify-center items-center"
      style={{ minHeight: "100vh" }}
    >
      {children}
    </div>
  );
}
