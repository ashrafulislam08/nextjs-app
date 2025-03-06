"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const searchQuery = { search };
    const urlQueryParam = new URLSearchParams(searchQuery);
    const url = `${pathname}?${urlQueryParam}`;
    router.push(url);
  }, [search]);

  return (
    <div className="flex items-center justify-center mb-4 ">
      <input
        type="text"
        className="text-black bg-slate-500 px-2 py-3 rounded"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearchInput;
