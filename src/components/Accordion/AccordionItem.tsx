"use client";
import styles from "./Accordion.module.css";
import { ReactElement, useEffect, useRef } from "react";
import { AccordionTitle } from "./AccordionTitle";
import Image from "next/image";
import classNames from "classnames";
import { TransitionLink } from "../layout/navigation/TransitionLink/TransitionLink";
import HoverBackground from "../animations/HoverBackground/HoverBackground";

export interface AccordionItemProps {
  isActive: boolean;
  onClick: () => void;
  title: string;
  content: string | ReactElement;
  service: string[];
  tech: string[];
  image?: string;
  comingSoon?: boolean;
  alt?: string;
  slug: string;
}

export const AccordionItem = ({
  isActive = true,
  content,
  service,
  tech,
  image,
  comingSoon,
  alt,
  title,
  slug,
  onClick,
}: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);

  function handleOpen(el: HTMLDivElement) {
    if (isActive) {
      el.style.maxHeight = `${el.scrollHeight}px`;
    } else {
      el.style.maxHeight = "0px";
    }
  }
  useEffect(() => {
    const el = contentRef.current as HTMLDivElement;
    handleOpen(el);
  }, [isActive, handleOpen]);

  return (
    <HoverBackground className={styles.AccordionItem} onClick={onClick}>
      <AccordionTitle title={title} onClick={onClick} isActive={isActive} />
      <section
        className={classNames(
          styles.AccordionItem__Section,
          "flex flex-col md:flex-row justify-between gap-4"
        )}
        ref={contentRef}
        {...(isActive && { "data-is-open": true })}
      >
        <div className="flex-1">
          {comingSoon ? (
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-xl md:text-2xl font-semibold p-4 text-center">
                Coming Soon
              </p>
            </div>
          ) : (
            image && (
              <Image
                src={image}
                alt={alt || "Project"}
                width={500}
                height={500}
              />
            )
          )}
        </div>
        <div className="flex-1 flex flex-col gap-2 justify-between">
          <h2 className="text-clamp-accordion-content">{content}</h2>
          <div className="flex justify-between">
            <div className="flex flex-col flex-1">
              <h3>Services</h3>
              <ul
                className={classNames(
                  styles.AccordionList,
                  "flex",
                  "flex-wrap",
                  "gap-2",
                  "pt-4"
                )}
              >
                {service.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col flex-1">
              <h3>Tech</h3>
              <ul
                className={classNames(
                  styles.AccordionList,
                  "flex",
                  "flex-wrap",
                  "gap-2",
                  "pt-4"
                )}
              >
                {tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-fit">
            <TransitionLink
              className={styles.AccordionLink}
              href={`/work/${slug}`}
            >
              View Project
            </TransitionLink>
          </div>
        </div>
      </section>
    </HoverBackground>
  );
};
export default AccordionItem;
