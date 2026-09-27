import type { MockupVariant } from "../data/content";

function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex flex-col bg-elevated text-left">
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-base shrink-0">
        <span className="w-5 h-5 rounded-md bg-accent shrink-0" />
        <div className="flex gap-2">
          <span className="h-1.5 w-10 rounded-full bg-fg/15" />
          <span className="h-1.5 w-10 rounded-full bg-fg/10" />
          <span className="h-1.5 w-10 rounded-full bg-fg/10" />
        </div>
        <span className="ml-auto w-6 h-6 rounded-full bg-fg/10" />
      </div>
      <div className="flex-1 min-h-0 p-4 md:p-5">{children}</div>
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-base bg-soft p-3 flex-1 min-w-0">
      <p className="text-[10px] uppercase tracking-wide text-muted truncate">{label}</p>
      <p className="font-display font-semibold text-lg mt-1">{value}</p>
    </div>
  );
}

function DashboardMockup() {
  const bars = [40, 65, 50, 80, 55, 90, 70];
  return (
    <div className="h-full flex flex-col gap-3">
      <div className="flex gap-3">
        <StatCard label="Total" value="128" />
        <StatCard label="Active" value="34" />
        <StatCard label="Pending" value="9" />
      </div>
      <div className="flex-1 rounded-lg border border-base bg-soft p-4 flex items-end gap-2 min-h-0">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{
              height: `${h}%`,
              background: i % 3 === 0 ? "var(--accent)" : "var(--pop)",
              opacity: i % 3 === 0 ? 1 : 0.6,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function TableMockup() {
  const rows = [
    { name: "Aria Patel", status: "Active", tone: "accent" },
    { name: "Warehouse #4", status: "Synced", tone: "accent" },
    { name: "Nimbus Corp", status: "Pending", tone: "pop" },
    { name: "Jordan Blake", status: "Active", tone: "accent" },
    { name: "Storefront B", status: "Review", tone: "pop" },
  ];
  return (
    <div className="h-full rounded-lg border border-base bg-soft overflow-hidden flex flex-col">
      <div className="flex px-4 py-2 border-b border-base text-[10px] uppercase tracking-wide text-muted shrink-0">
        <span className="flex-1">Name</span>
        <span className="w-20">Status</span>
      </div>
      <div className="flex-1 min-h-0">
        {rows.map((row, i) => (
          <div
            key={row.name}
            className={`flex items-center px-4 py-2.5 text-sm ${i !== rows.length - 1 ? "border-b border-base" : ""}`}
          >
            <span className="flex-1 truncate">{row.name}</span>
            <span
              className="w-fit px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={{
                color: row.tone === "accent" ? "var(--accent)" : "var(--pop)",
                background: row.tone === "accent" ? "color-mix(in srgb, var(--accent) 15%, transparent)" : "color-mix(in srgb, var(--pop) 15%, transparent)",
              }}
            >
              {row.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function KanbanMockup() {
  const columns = [
    { title: "To do", count: 3 },
    { title: "In progress", count: 2 },
    { title: "Done", count: 4 },
  ];
  return (
    <div className="h-full grid grid-cols-3 gap-3">
      {columns.map((col) => (
        <div key={col.title} className="rounded-lg border border-base bg-soft p-2.5 flex flex-col gap-2 min-h-0">
          <p className="text-[10px] uppercase tracking-wide text-muted px-1">
            {col.title} · {col.count}
          </p>
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="rounded-md bg-elevated border border-base p-2 space-y-1.5">
              <span className="block h-1.5 w-3/4 rounded-full bg-fg/20" />
              <span className="block h-1.5 w-1/2 rounded-full bg-fg/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="h-full rounded-lg border border-base bg-soft p-4 flex flex-col gap-3 overflow-hidden">
      <div className="max-w-[70%] rounded-xl rounded-bl-sm bg-elevated border border-base p-2.5 space-y-1.5">
        <span className="block h-1.5 w-32 rounded-full bg-fg/20" />
        <span className="block h-1.5 w-24 rounded-full bg-fg/10" />
      </div>
      <div className="max-w-[75%] self-end rounded-xl rounded-br-sm bg-accent/15 border border-accent/40 p-2.5 space-y-1.5">
        <span className="font-mono text-[9px] uppercase tracking-wide text-accent">AI draft</span>
        <span className="block h-1.5 w-40 rounded-full bg-fg/20" />
        <span className="block h-1.5 w-36 rounded-full bg-fg/15" />
        <span className="block h-1.5 w-20 rounded-full bg-fg/10" />
      </div>
      <div className="max-w-[70%] rounded-xl rounded-bl-sm bg-elevated border border-base p-2.5 space-y-1.5">
        <span className="block h-1.5 w-28 rounded-full bg-fg/20" />
      </div>
    </div>
  );
}

function CardsMockup() {
  return (
    <div className="h-full grid grid-cols-3 gap-3">
      {["Starter", "Growth", "Scale"].map((tier, i) => (
        <div
          key={tier}
          className={`rounded-lg border p-3 flex flex-col gap-2 ${i === 1 ? "border-accent bg-accent/10" : "border-base bg-soft"}`}
        >
          <span className="text-xs font-semibold">{tier}</span>
          <span className="font-display font-semibold text-lg">
            {i === 0 ? "$0" : i === 1 ? "$29" : "$99"}
          </span>
          <div className="space-y-1.5 mt-1">
            {Array.from({ length: 3 }).map((_, j) => (
              <span key={j} className="block h-1.5 w-full rounded-full bg-fg/10" />
            ))}
          </div>
          <span
            className="mt-auto h-6 rounded-md"
            style={{ background: i === 1 ? "var(--accent)" : "var(--border)" }}
          />
        </div>
      ))}
    </div>
  );
}

const variants: Record<MockupVariant, () => React.ReactNode> = {
  dashboard: DashboardMockup,
  table: TableMockup,
  kanban: KanbanMockup,
  chat: ChatMockup,
  cards: CardsMockup,
};

export default function MockupScreen({ variant }: { variant: MockupVariant }) {
  const Content = variants[variant];
  return (
    <Chrome>
      <Content />
    </Chrome>
  );
}
