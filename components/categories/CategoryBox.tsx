"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback } from "react";
import { IconType } from "react-icons/lib";
import qs from "query-string";
import { categories } from "./Categories";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
  description?: string;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
  icon: Icon,
  label,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();
  const pathname = usePathname();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const currentCategories = params?.get("category")?.split(",");

    if (currentCategories?.includes(label)) {
      currentCategories.splice(currentCategories.indexOf(label), 1);
    } else {
      currentCategories?.push(label);
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: currentCategories?.join(","),
    };

    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: updatedQuery,
      },
      { skipNull: true },
    );

    router.push(url);
  }, [label, params, router, pathname]);

  return (
    <div
      onClick={handleClick}
      className={`${selected ? "border-b-neutral-800" : "border-transparent"}
                ${selected ? "text-neutral-800" : "text-neutral-500"}
       flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm tracking-tight">{label}</div>
    </div>
  );
};

export default CategoryBox;
