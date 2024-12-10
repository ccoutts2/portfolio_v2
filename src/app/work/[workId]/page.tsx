"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

import { workDetails } from "@/lib/getWorkDetails";
import Link from "next/link";
import Image from "next/image";
import { assetsConfig } from "@/config/assets";
import { TransitionLink } from "@/components";

import { useInView } from "react-intersection-observer";
import classNames from "classnames";

interface WorkPageProps {
  params: Promise<{
    workId: string;
  }>;
}

export default function Page({ params }: WorkPageProps) {
  const [workId, setWorkId] = useState<string | null>(null);
  const work = workDetails[workId as keyof typeof workDetails];

  console.log(work);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params;

      setWorkId(resolvedParams.workId);
    };

    fetchParams();
  }, [params]);

  if (!work) {
    return <p>Loading Project</p>;
  }
  return (
    <>
      <div className="w-full h-[75vh]">
        <Image
          src={work.images[0].src}
          alt={work.images[0].description}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <aside className="flex gap-4 p-6 w-full text-sm">
        <div className="flex-[1] flex flex-col md:flex-row gap-4">
          <div className="flex-[1]">
            <p>Client &#x2192; {work.title}</p>
          </div>
          <div className="flex-[1]">
            <p>Project Type &#x2192; {work.projectType}</p>
          </div>
        </div>
        <div className="sm:flex-[1] md:flex-[0.5] flex-[1]">
          <div className="text-end">
            <p>Year &#x2192; {work.year}</p>
          </div>
        </div>
      </aside>
      <section className="flex flex-col sm:flex-row gap-4 py-32 px-6 w-full">
        <div className="flex-[1]">
          <h1 className="text-clampHome">
            Dynamic Vision: <br />
            TechCorp x Innovate Media
          </h1>
        </div>

        <div className="flex-[1]">
          <p className="text-2xl">{work.information}</p>

          <div className="flex gap-4 my-8 mx-0 justify-between">
            <ul className="flex gap-4">
              {work.service.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <span className="flex gap-4">
              &#x2192; <Link href="/">Live Site</Link>
            </span>
          </div>
        </div>
      </section>

      <div className="w-full h-[75vh]">
        <Image
          src={work.images[1].src}
          alt={work.images[1].description}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex-[1] flex flex-col md:flex-row py-8 px-4">
        <div className="flex-[1]"></div>
        <div className="flex-[1]">
          <p className="text-2xl">{work.information}</p>
        </div>
      </div>

      <div className="w-full py-2 px-6 flex flex-col md:flex-row gap-6">
        <ImageContainer
          src={work.images[2].src}
          alt={work.images[2].description}></ImageContainer>

        <ImageContainer
          src={assetsConfig["new-street"][0].src}
          alt={assetsConfig["new-street"][0].description}></ImageContainer>
      </div>
      <div className="w-full py-2 px-6 flex flex-col md:flex-row gap-6">
        <ImageContainer
          src={assetsConfig["new-street"][0].src}
          alt={assetsConfig["new-street"][0].description}></ImageContainer>

        <ImageContainer
          src={assetsConfig["new-street"][0].src}
          alt={assetsConfig["new-street"][0].description}></ImageContainer>
      </div>

      <div className="w-full h-full">
        <Image
          src={assetsConfig["new-street"][0].src}
          alt={assetsConfig["new-street"][0].description}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="h-[25vh] flex flex-col items-center justify-center">
        <h3 className="text-clampHome">More Work</h3>

        <ul className="flex justify-center items-center gap-8 py-8">
          {Object.values(workDetails).map(({ title, slug, id }) => (
            <li key={id}>
              <TransitionLink underline href={`/work/${slug}`}>
                {title}
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

interface ImageContainerProps {
  src: string;
  alt: string;
}

const ImageContainer = ({ src, alt }: ImageContainerProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      <Image
        src={src}
        alt={alt}
        width={800}
        height={800}
        className={classNames("w-full", "h-full", "object-cover", "scale-95", {
          [styles.InView]: inView,
        })}
      />
    </div>
  );
};
