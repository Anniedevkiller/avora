"use client";

import { roles } from "@/data/careers";
import { useState, useId } from "react";
import { ChevronDown, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function RolesList() {
  const uid = useId();
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className="flex flex-col divide-y divide-mist-dark rounded-lg border border-mist-dark overflow-hidden">
      {roles.map((role) => {
        const isOpen = openId === role.id;
        const headingId = `${uid}-${role.id}-heading`;
        const panelId = `${uid}-${role.id}-panel`;

        return (
          <div key={role.id}>
            <h3>
              <button
                id={headingId}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => setOpenId(isOpen ? null : role.id)}
                className={cn(
                  "flex w-full items-center justify-between gap-4 bg-white px-6 py-5 text-left transition-colors duration-150 hover:bg-mist-grey min-h-[44px]",
                  isOpen && "bg-mist-grey"
                )}
              >
                <div className="flex items-center gap-3">
                  <Briefcase size={16} className="shrink-0 text-teal-500" aria-hidden="true" />
                  <span className="font-semibold text-navy-500">{role.title}</span>
                </div>
                <ChevronDown
                  size={18}
                  className={cn(
                    "shrink-0 text-teal-500 transition-transform duration-200",
                    isOpen && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headingId}
              hidden={!isOpen}
              className="bg-white"
            >
              <div className="border-t border-mist-dark px-6 py-6 space-y-6">
                <p className="text-base text-[#3a5068]">{role.summary}</p>

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Responsibilities
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {role.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-[#3a5068]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-[#6b8ea8]">
                    Requirements
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {role.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-sm text-[#3a5068]">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-navy-200" aria-hidden="true" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded border border-mist-dark bg-mist-grey p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6b8ea8] mb-1">
                      Working hours
                    </p>
                    <p className="text-sm text-[#3a5068]">{role.workingHours}</p>
                  </div>
                  <div className="rounded border border-mist-dark bg-mist-grey p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#6b8ea8] mb-2">
                      Equipment required
                    </p>
                    <ul className="flex flex-col gap-1">
                      {role.equipment.map((e) => (
                        <li key={e} className="text-sm text-[#3a5068]">· {e}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
