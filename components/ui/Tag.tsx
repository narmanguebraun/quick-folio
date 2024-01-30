export type TagProps = {
  children: string;
};

export function Tag({ children }: TagProps) {
  return (
    <div className="inline-block py-1 px-2 bg-slate-500 border border-black rounded-full text-xs break-words">
      {children}
    </div>
  );
}
