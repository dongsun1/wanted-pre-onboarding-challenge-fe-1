export default function Title({ title }: { title: string }) {
  return (
    <div className="py-4">
      <h1 className="text-2xl">{title}</h1>
    </div>
  );
}
