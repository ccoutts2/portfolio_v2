"use client";
import { useEffect, useState } from "react";

import { workDetails } from "@/lib/getWorkDetails";
import { useScreenDetector } from "@/hooks/useScreenDetector";
import Link from "next/link";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";
import { TransitionLink } from "@/components";

import { SlideUp } from "@/components";
import ClipContainer from "@/components/ClipContainer/ClipContainer";
import { Mockups } from "@/components/ui/Mockups/Mockups";

interface WorkPageProps {
  params: Promise<{
    workId: string;
  }>;
}

export default function Page({ params }: WorkPageProps) {
  const [workId, setWorkId] = useState<string | null>(null);
  const work = workDetails[workId as keyof typeof workDetails];

  const { isMobile } = useScreenDetector();

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;

      setWorkId(resolvedParams.workId);
    };

    fetchParams();
  }, [params, isMobile]);

  if (!work) {
    return <p>Loading Project</p>;
  }

  return (
    <main>
      <div className="w-full">
        <Image
          src={assetsConfig.ewm[0].src}
          alt=""
          width={3024}
          height={1646}
          sizes="(max-width: 768px) 100vh, (max-width: 1024px) 75vh"
          className="w-full h-full object-cover"
        />
      </div>

      <aside className="flex gap-4 p-6 w-full text-sm">
        <div className="flex-1 flex flex-col md:flex-row gap-4">
          <header className="flex-1">
            <h1>Client &#x2192; {work.title}</h1>
          </header>

          <div className="flex-1">
            <p>Project Type &#x2192; {work.projectType}</p>
          </div>
        </div>
        <div className="sm:flex-1 md:flex-[0.5] flex-1">
          <div className="text-end">
            <p>Year &#x2192; {work.year}</p>
          </div>
        </div>
      </aside>
      <section className="flex flex-col sm:flex-row gap-4 py-12 md:py-32 px-6 w-full">
        <div className="flex-1">
          <SlideUp>
            <h2 className="text-clamp-home">{work.slogan}</h2>
          </SlideUp>
        </div>

        <div className="flex-1">
          <SlideUp delay={0.2}>
            <p className="text-clamp-project-text">{work.information}</p>
          </SlideUp>

          <div className="flex gap-4 my-8 mx-0 justify-between">
            <ul className="flex gap-4">
              {work.service.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <span className="flex gap-4">
              &#x2192;{" "}
              <Link target="_blank" href={work.liveSite}>
                Live Site
              </Link>
            </span>
          </div>
        </div>
      </section>

      {!isMobile ? (
        <div className="h-[330vh] relative flex justify-between gap-8">
          <div className="w-full sticky h-fit overflow-hidden top-[10vh] flex-2 pl-12">
            <div className="text-PageHome flex flex-col gap-8 pt-8">
              {work.information2.map((item, index) => (
                <SlideUp key={index}>
                  <p>{item}</p>
                </SlideUp>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 h-[330vh] flex-1 justify-between px-12">
            <Mockups
              type="mobile"
              src={assetsConfig.ewm[9].src}
              alt=""
              width={700}
              height={1472}
            />
            <Mockups
              type="mobile"
              src={assetsConfig.ewm[8].src}
              alt=""
              width={700}
              height={1472}
            />
            <Mockups
              type="mobile"
              src={assetsConfig.ewm[7].src}
              alt=""
              width={700}
              height={1472}
            />
          </div>
        </div>
      ) : (
        <div>
          <div className="overflow-x-auto relative whitespace-nowrap">
            <div className="flex gap-8  w-fit">
              <Mockups
                type="mobile"
                src={assetsConfig.ewm[9].src}
                alt=""
                width={700}
                height={1472}
              />
              <Mockups
                type="mobile"
                src={assetsConfig.ewm[8].src}
                alt=""
                width={700}
                height={1472}
              />
              <Mockups
                type="mobile"
                src={assetsConfig.ewm[7].src}
                alt=""
                width={700}
                height={1472}
              />
            </div>
          </div>
          <div className="text-PageHome flex flex-col gap-8 pt-8">
            {work.information2.map((item, index) => (
              <SlideUp key={index}>
                <p>{item}</p>
              </SlideUp>
            ))}
          </div>
        </div>
      )}

      <div className="w-full py-4 md:px-4 my-24 flex flex-col md:flex-row md:justify-between gap-6">
        <div className="flex-1">
          <Mockups
            type="desktop"
            src={assetsConfig.ewm[1].src}
            alt=""
            width={3024}
            height={1646}
          />
        </div>
        <div className="flex-1">
          <Mockups
            type="desktop"
            src={assetsConfig.ewm[2].src}
            alt=""
            width={3024}
            height={1646}
          />
        </div>
      </div>
      <div className="w-full py-4 md:px-6 my-36 flex flex-col md:flex-row md:justify-between gap-6 md:gap-44">
        <div className="flex-[1.75]">
          <Mockups
            type="desktop"
            src={assetsConfig.ewm[3].src}
            alt=""
            width={3024}
            height={1646}
          />
        </div>
        <div className="flex-1">
          <Mockups
            type="mobile"
            src={assetsConfig.ewm[10].src}
            alt=""
            width={700}
            height={1472}
          />
        </div>
      </div>

      <ClipContainer
        src={assetsConfig.ewm[4].src}
        alt=""
        width={3024}
        height={1646}
      />

      <div className="h-[25vh] flex flex-col items-center justify-center">
        <h3 className="text-clamp-home">More Work</h3>

        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 py-8">
          {Object.values(workDetails).map(({ title, slug, id }) => (
            <li key={id}>
              <TransitionLink underline href={`/work/${slug}`}>
                <SlideUp delay={id * 0.1}>{title}</SlideUp>
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
