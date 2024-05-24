import { Loader } from "lucide-react";
import React from "react";

type LoadingProps = {
  title?: string;
};

export default function Loading({ title = "Yükleniyor..." }: LoadingProps) {
  return (
    <div className="h-full w-full flex items-center justify-center space-x-1 text-2xl">
      <Loader className="text-white animate-spin" />
      <span className="text-white animate-pulse">{title}</span>
    </div>
  );
}
