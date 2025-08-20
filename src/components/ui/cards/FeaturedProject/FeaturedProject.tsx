import { TransitionLink } from "@/components/layout/navigation/TransitionLink/TransitionLink";
import { assetsConfig } from "@/config/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface FeaturedProjectProps {
  projectName: string;
  role: MetaData[];
  year: string;
}

interface MetaData {
  role: string;
}

export const FeaturedProject = ({
  projectName,
  role,
  year,
}: FeaturedProjectProps) => {
  return (
    <>
      <h3 className="text-lg py-2">Featured Project</h3>
      <article className="border border-solid max-w-fit p-4 flex flex-row-reverse gap-4 relative">
        <div className="flex flex-col justify-between h-full gap-4">
          <div className="flex flex-col">
            <h4 className="text-sm md:text-base">{projectName}</h4>
            <dl className="flex gap-1 text-xs text-gray-500 flex-wrap">
              {role.map((meta, index) => (
                <React.Fragment key={index}>
                  <dt className="vh">Role</dt>
                  <dd>{meta.role}</dd>
                </React.Fragment>
              ))}
              <dt className="vh">Year</dt>
              <dd>{year}</dd>
            </dl>
          </div>
          <span className="block text-sm md:text-base">
            <Link href="/contact">See Project</Link>
          </span>
        </div>

        <div className="border-[0.75rem] border-solid max-w-48 max-h-48">
          <Image
            src={assetsConfig["ewm"][0].src}
            alt={assetsConfig["ewm"][0].description}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>

        <TransitionLink
          href="/work/ewm-bespoke-interiors"
          className="absolute inset-0">
          <span className="vh">See EWM Project Case Study</span>
        </TransitionLink>
      </article>
    </>
  );
};
