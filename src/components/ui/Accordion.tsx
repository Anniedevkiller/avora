"use client";

import { useState, useRef, useId, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

function AccordionPanel({
  item,
  isOpen,
  headingId,
  panelId,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  headingId: string;
  panelId: string;
  onToggle: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (panelRef.current) {
      setHeight(isOpen ? panelRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className={cn("border-b border-mist-dark last:border-b-0 transition-colors duration-150", isOpen && "bg-mist-grey/30")}>
      <h3>
        <button
          id={headingId}
          aria-controls={panelId}
          aria-expanded={isOpen}
          onClick={onToggle}
          className="group flex w-full items-center justify-between gap-4 px-0 py-5 text-left min-h-[44px] cursor-pointer"
        >
          <span className={cn(
            "text-base font-semibold text-navy-500 transition-colors duration-150",
            isOpen ? "text-teal-600" : "group-hover:text-teal-500"
          )}>
            {item.question}
          </span>
          <span className={cn(
            "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-250",
            isOpen
              ? "border-teal-500 bg-teal-500 text-white rotate-180"
              : "border-mist-dark bg-white text-[#6b8ea8] group-hover:border-teal-300"
          )}>
            <ChevronDown size={15} aria-hidden="true" />
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        style={{ height, overflow: "hidden", transition: "height 0.3s cubic-bezier(0.22,1,0.36,1)" }}
      >
        <div ref={panelRef} className="pb-5 pr-10">
          <p className="text-base text-[#3a5068] leading-relaxed">{item.answer}</p>
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, allowMultiple = false }: AccordionProps) {
  const uid = useId();
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set());

  function toggle(index: number) {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  }

  return (
    <div className="divide-y divide-mist-dark rounded-lg border border-mist-dark bg-white px-6">
      {items.map((item, i) => (
        <AccordionPanel
          key={i}
          item={item}
          isOpen={openIndexes.has(i)}
          headingId={`${uid}-q-${i}`}
          panelId={`${uid}-a-${i}`}
          onToggle={() => toggle(i)}
        />
      ))}
    </div>
  );
}
