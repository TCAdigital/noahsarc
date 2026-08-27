"use client";

import {
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  LogOut,
  Plus,
  RotateCcw,
  Save,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";

import { saveSiteContent, signOut } from "@/app/admin/actions";
import SiteImage from "@/components/SiteImage";
import type { SiteContent } from "@/lib/data";

type Path = (string | number)[];
type Unknown = Record<string, unknown>;

/** Keys whose value is a URL pointing at an image. */
const IMAGE_KEY = /(^image$|image$|^logo$)/i;
/** Keys that hold enough prose to deserve a textarea. */
const LONG_TEXT_KEY = /(text|description|copy|welcome|subtitle|address)/i;

/** Values the CMS may only pick from a list. */
const ENUM_OPTIONS: Record<string, string[]> = {
  theme: ["dark", "amber", "blue", "green"],
  icon: ["school", "university", "graduation-cap", "award"],
};

const SECTION_LABELS: Record<string, string> = {
  topBar: "Top bar",
  hero: "Hero",
  mission: "Mission & vision",
  whatWeDo: "What we do",
  gallery: "Gallery",
  partners: "Partners",
  projects: "Projects",
  sponsorship: "Sponsorship",
  sponsor: "Sponsor a child",
  contact: "Contact",
  footer: "Footer",
};

function humanise(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (char) => char.toUpperCase())
    .trim();
}

function isPlainObject(value: unknown): value is Unknown {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getIn(source: unknown, path: Path): unknown {
  return path.reduce<unknown>(
    (value, key) =>
      value === undefined || value === null
        ? undefined
        : (value as Unknown)[key as string],
    source,
  );
}

function setIn<T>(source: T, path: Path, value: unknown): T {
  if (path.length === 0) return value as T;

  const [head, ...rest] = path;

  if (Array.isArray(source)) {
    const copy = [...source];
    copy[head as number] = setIn(copy[head as number], rest, value);
    return copy as T;
  }

  const object = source as Unknown;
  return {
    ...object,
    [head as string]: setIn(object[head as string], rest, value),
  } as T;
}

/**
 * Blanks out the text in a copy of an array template so a freshly added item
 * starts empty instead of duplicating the previous one.
 */
function blankTemplate(template: unknown): unknown {
  if (typeof template === "string") return "";
  if (typeof template === "number") return 0;
  if (Array.isArray(template)) return [];
  if (isPlainObject(template)) {
    return Object.fromEntries(
      Object.entries(template).map(([key, value]) => [
        key,
        // Enums must stay valid, so keep the default option.
        key in ENUM_OPTIONS ? value : blankTemplate(value),
      ]),
    );
  }
  return template;
}

type EditorProps = {
  initial: SiteContent;
  defaults: SiteContent;
  userEmail: string;
};

export default function ContentEditor({
  initial,
  defaults,
  userEmail,
}: EditorProps) {
  const sections = Object.keys(initial) as (keyof SiteContent)[];

  const [draft, setDraft] = useState<SiteContent>(initial);
  const [saved, setSaved] = useState<SiteContent>(initial);
  const [section, setSection] = useState<keyof SiteContent>(sections[0]);
  const [error, setError] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);
  const [isSaving, startSaving] = useTransition();

  const isDirty = JSON.stringify(draft) !== JSON.stringify(saved);

  const update = (path: Path, value: unknown) => {
    setJustSaved(false);
    setDraft((current) => setIn(current, path, value));
  };

  const addItem = (path: Path) => {
    const list = (getIn(draft, path) ?? []) as unknown[];
    const template = list[0] ?? (getIn(defaults, path) as unknown[])?.[0] ?? "";
    update(path, [...list, blankTemplate(template)]);
  };

  const removeItem = (path: Path, index: number) => {
    const list = (getIn(draft, path) ?? []) as unknown[];
    update(
      path,
      list.filter((_, position) => position !== index),
    );
  };

  const resetSection = () => {
    update([section], defaults[section]);
  };

  const handleSave = () => {
    setError(null);
    startSaving(async () => {
      const result = await saveSiteContent(draft);
      if (result.ok) {
        setSaved(draft);
        setJustSaved(true);
      } else {
        setError(result.error);
      }
    });
  };

  return (
    <main className="min-h-screen bg-stone-50 flex">
      <aside className="w-72 bg-white border-r border-stone-200 hidden lg:flex flex-col p-8 sticky top-0 h-screen">
        <div className="mb-10">
          <div className="text-xs font-bold uppercase tracking-widest text-stone-900">
            CMS Panel
          </div>
          <div className="text-[10px] text-stone-400 font-bold uppercase tracking-widest mt-1 truncate">
            {userEmail}
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto -mx-2 px-2">
          {sections.map((key) => (
            <button
              key={key}
              onClick={() => setSection(key)}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-[10px] uppercase tracking-widest transition ${
                section === key
                  ? "bg-stone-900 text-white"
                  : "text-stone-400 hover:bg-stone-50"
              }`}
            >
              {SECTION_LABELS[key] ?? humanise(key)}
            </button>
          ))}
        </nav>

        <div className="pt-6 space-y-1">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-4 py-3 text-stone-400 hover:bg-stone-50 rounded-xl transition font-bold text-[10px] uppercase tracking-widest"
          >
            <ExternalLink size={14} /> View site
          </Link>
          <form action={signOut}>
            <button
              type="submit"
              className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition font-bold text-[10px] uppercase tracking-widest"
            >
              <LogOut size={14} /> Sign out
            </button>
          </form>
        </div>
      </aside>

      <section className="flex-1 p-6 lg:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="flex flex-wrap gap-6 justify-between items-end mb-10">
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-2 tracking-tight">
                {SECTION_LABELS[section] ?? humanise(section)}
              </h1>
              <p className="text-stone-400 text-sm">
                {isDirty
                  ? "You have unsaved changes."
                  : "Everything is up to date."}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={resetSection}
                className="flex items-center gap-2 px-5 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] text-stone-500 hover:bg-stone-200/60 transition"
              >
                <RotateCcw size={14} /> Reset section
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || !isDirty}
                className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold uppercase text-[10px] tracking-[0.2em] transition active:scale-95 disabled:opacity-50 ${
                  justSaved
                    ? "bg-emerald-500 text-white"
                    : "bg-amber-500 text-white hover:bg-amber-600 shadow-xl"
                }`}
              >
                {isSaving ? (
                  "Saving..."
                ) : justSaved ? (
                  <>
                    <CheckCircle size={14} /> Saved
                  </>
                ) : (
                  <>
                    <Save size={14} /> Save changes
                  </>
                )}
              </button>
            </div>
          </header>

          {error && (
            <p
              role="alert"
              className="flex items-center gap-3 bg-red-50 text-red-600 text-xs font-bold p-5 rounded-2xl border border-red-100 mb-8"
            >
              <AlertTriangle size={16} /> {error}
            </p>
          )}

          <div className="bg-white p-8 lg:p-10 rounded-[2rem] shadow-sm border border-stone-100">
            <NodeEditor
              value={draft[section]}
              path={[section]}
              update={update}
              addItem={addItem}
              removeItem={removeItem}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

type NodeProps = {
  value: unknown;
  path: Path;
  update: (path: Path, value: unknown) => void;
  addItem: (path: Path) => void;
  removeItem: (path: Path, index: number) => void;
  depth?: number;
};

function NodeEditor({ value, path, depth = 0, ...handlers }: NodeProps) {
  const { update, addItem, removeItem } = handlers;

  if (Array.isArray(value)) {
    return (
      <div className="space-y-4">
        {value.map((item, index) => (
          <div
            key={index}
            className="rounded-2xl border border-stone-200 p-6 relative"
          >
            <div className="flex justify-between items-center mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400">
                Item {index + 1}
              </span>
              <button
                onClick={() => removeItem(path, index)}
                aria-label={`Remove item ${index + 1}`}
                className="text-stone-300 hover:text-red-500 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
            <NodeEditor
              value={item}
              path={[...path, index]}
              depth={depth + 1}
              {...handlers}
            />
          </div>
        ))}
        <button
          onClick={() => addItem(path)}
          className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-amber-600 hover:text-amber-700 transition"
        >
          <Plus size={14} /> Add item
        </button>
      </div>
    );
  }

  if (isPlainObject(value)) {
    return (
      <div className={depth === 0 ? "space-y-8" : "space-y-6"}>
        {Object.entries(value).map(([key, child]) => {
          const childPath = [...path, key];
          const isBranch = Array.isArray(child) || isPlainObject(child);

          if (!isBranch) {
            return (
              <Leaf
                key={key}
                name={key}
                value={child}
                path={childPath}
                update={update}
              />
            );
          }

          return (
            <fieldset
              key={key}
              className="border-l-2 border-stone-100 pl-6 space-y-6"
            >
              <legend className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-500">
                {humanise(key)}
              </legend>
              <NodeEditor
                value={child}
                path={childPath}
                depth={depth + 1}
                {...handlers}
              />
            </fieldset>
          );
        })}
      </div>
    );
  }

  // A primitive sitting directly inside an array (e.g. a gallery URL).
  return (
    <Leaf
      name={String(path[path.length - 1])}
      value={value}
      path={path}
      update={update}
    />
  );
}

type LeafProps = {
  name: string;
  value: unknown;
  path: Path;
  update: (path: Path, value: unknown) => void;
};

function Leaf({ name, value, path, update }: LeafProps) {
  const id = path.join("-");
  const label = /^\d+$/.test(name) ? `Item ${Number(name) + 1}` : humanise(name);
  const inputClass =
    "w-full bg-stone-50 border border-stone-200 rounded-2xl py-3.5 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition";

  const options = ENUM_OPTIONS[name];
  const isImage = IMAGE_KEY.test(name) || (path.includes("images") && typeof value === "string");
  const isLongText =
    typeof value === "string" && (LONG_TEXT_KEY.test(name) || value.length > 120);

  return (
    <div>
      <label
        htmlFor={id}
        className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 block mb-2"
      >
        {label}
      </label>

      {options ? (
        <select
          id={id}
          value={String(value)}
          onChange={(event) => update(path, event.target.value)}
          className={inputClass}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {humanise(option)}
            </option>
          ))}
        </select>
      ) : typeof value === "number" ? (
        <input
          id={id}
          type="number"
          value={value}
          onChange={(event) =>
            update(path, Number.parseInt(event.target.value, 10) || 0)
          }
          className={inputClass}
        />
      ) : isImage ? (
        <div className="flex gap-4 items-start">
          <div className="relative h-20 w-28 shrink-0 rounded-xl overflow-hidden bg-stone-100 border border-stone-200">
            <SiteImage
              src={String(value)}
              alt=""
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <input
            id={id}
            type="text"
            value={String(value)}
            onChange={(event) => update(path, event.target.value)}
            placeholder="/images/example.jpg"
            className={inputClass}
          />
        </div>
      ) : isLongText ? (
        <textarea
          id={id}
          rows={Math.min(10, Math.ceil(String(value).length / 90) + 2)}
          value={String(value)}
          onChange={(event) => update(path, event.target.value)}
          className={inputClass}
        />
      ) : (
        <input
          id={id}
          type="text"
          value={String(value)}
          onChange={(event) => update(path, event.target.value)}
          className={inputClass}
        />
      )}
    </div>
  );
}
