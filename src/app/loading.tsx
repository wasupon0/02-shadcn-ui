import SkeletonCard from "@/components/SkeletonCard";
import React from "react";

const loading = () => {
  return (
    <main>
      <div className="md:grid md:grid-cols-3 md:gap-8 flex flex-col justify-between m-6 gap-8 ">
        {"123456789".split("").map((i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </main>
  );
};

export default loading;
