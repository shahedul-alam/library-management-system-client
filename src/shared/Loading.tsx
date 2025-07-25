import { cn } from "@/lib/utils";

const Loading = ({ full }: {full: boolean}) => {
  return (
    <div
      className={cn("container mx-auto flex justify-start", {
        "min-h-screen": full,
        "justify-center": full,
      })}
    >
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default Loading;
