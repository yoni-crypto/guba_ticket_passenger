const colorGroups = [
  {
    title: "Brand & Accent",
    swatches: [
      {
        name: "Primary",
        className: "bg-primary text-primary-foreground",
        variable: "--color-primary",
        description: "Primary teal for high emphasis actions.",
      },
      {
        name: "Primary Emphasis",
        className: "bg-primary-emphasis text-primary-foreground",
        variable: "--color-primary-emphasis",
        description: "Darker teal state for hover and pressed interactions.",
      },
      {
        name: "Primary Muted",
        className: "bg-primary-muted text-neutral-800",
        variable: "--color-primary-muted",
        description: "Soft teal used for light backgrounds and accents.",
      },
      {
        name: "Emerald",
        className: "bg-emerald text-emerald-foreground",
        variable: "--color-emerald",
        description: "Supportive emerald for success messaging.",
      },
      {
        name: "Gold",
        className: "bg-gold text-gold-foreground",
        variable: "--color-gold",
        description: "Highlight gold for badges and indicators.",
      },
      {
        name: "Accent",
        className: "bg-accent text-accent-foreground",
        variable: "--color-accent",
        description: "Warm accent for illustrations or highlights.",
      },
    ],
  },
  {
    title: "Neutrals",
    swatches: [
      {
        name: "Neutral 50",
        className: "bg-neutral-50 text-neutral-900",
        variable: "--color-neutral-50",
        description: "Ultra light neutral for backgrounds.",
        withBorder: true,
      },
      {
        name: "Neutral 500",
        className: "bg-neutral-500 text-neutral-50",
        variable: "--color-neutral-500",
        description: "Balanced neutral for subdued UI elements.",
      },
      {
        name: "Neutral 900",
        className: "bg-neutral-900 text-neutral-50",
        variable: "--color-neutral-900",
        description: "Deep neutral for typography and high contrast.",
      },
    ],
  },
  {
    title: "Surfaces",
    swatches: [
      {
        name: "Surface",
        className: "bg-surface text-foreground",
        variable: "--color-surface",
        description: "Default card and container background.",
        withBorder: true,
      },
      {
        name: "Surface Subtle",
        className: "bg-surface-subtle text-foreground",
        variable: "--color-surface-subtle",
        description: "Subtle layering for insets and panels.",
        withBorder: true,
      },
      {
        name: "Surface Muted",
        className: "bg-surface-muted text-foreground",
        variable: "--color-surface-muted",
        description: "Muted divider and contrast background.",
        withBorder: true,
      },
      {
        name: "Surface Inverted",
        className: "bg-surface-inverted text-neutral-50",
        variable: "--color-surface-inverted",
        description: "Inverted canvas for dark overlays.",
      },
    ],
  },
];

const spacingTokens = [
  { label: "0", variable: "--space-0", value: "0px" },
  { label: "0.5", variable: "--space-0-5", value: "0.25rem / 4px" },
  { label: "1", variable: "--space-1", value: "0.5rem / 8px" },
  { label: "2", variable: "--space-2", value: "1rem / 16px" },
  { label: "3", variable: "--space-3", value: "1.5rem / 24px" },
  { label: "4", variable: "--space-4", value: "2rem / 32px" },
  { label: "5", variable: "--space-5", value: "2.5rem / 40px" },
  { label: "6", variable: "--space-6", value: "3rem / 48px" },
  { label: "7", variable: "--space-7", value: "3.5rem / 56px" },
  { label: "8", variable: "--space-8", value: "4rem / 64px" },
  { label: "9", variable: "--space-9", value: "4.5rem / 72px" },
  { label: "10", variable: "--space-10", value: "5rem / 80px" },
  { label: "12", variable: "--space-12", value: "6rem / 96px" },
];

const radiusTokens = [
  { label: "none", variable: "--radius-none", value: "0px" },
  { label: "sm", variable: "--radius-sm", value: "0.25rem" },
  { label: "md", variable: "--radius-md", value: "0.5rem" },
  { label: "lg", variable: "--radius-lg", value: "0.75rem" },
  { label: "xl", variable: "--radius-xl", value: "1rem" },
  { label: "pill", variable: "--radius-pill", value: "9999px" },
];

const borderTokens = [
  { label: "hairline", className: "border-hairline", variable: "--border-width-hairline" },
  { label: "thin", className: "border-thin", variable: "--border-width-thin" },
  { label: "thick", className: "border-thick", variable: "--border-width-thick" },
];

const typographyTokens = [
  {
    label: "Display",
    className: "font-display text-5xl",
    description: "Hero headlines and marketing moments.",
  },
  {
    label: "Heading 1",
    className: "font-display text-4xl",
    description: "Primary page titles.",
  },
  {
    label: "Heading 2",
    className: "font-display text-3xl",
    description: "Section headings and key callouts.",
  },
  {
    label: "Heading 3",
    className: "font-display text-2xl",
    description: "Subsection headings.",
  },
  {
    label: "Body Large",
    className: "text-lg",
    description: "Emphasized paragraphs or lead text.",
  },
  {
    label: "Body Base",
    className: "text-base",
    description: "Default reading size for long-form content.",
  },
  {
    label: "Body Small",
    className: "text-sm",
    description: "Supporting copy, captions, and meta details.",
  },
  {
    label: "Caption",
    className: "text-xs uppercase tracking-wide text-neutral-500",
    description: "Micro copy and labels with increased letter spacing.",
  },
];

const motionTokens = [
  {
    label: "duration-short",
    className: "duration-short ease-standard",
    variable: "--motion-duration-short",
    value: "150ms",
  },
  {
    label: "duration-medium",
    className: "duration-medium ease-soft",
    variable: "--motion-duration-medium",
    value: "250ms",
  },
  {
    label: "duration-long",
    className: "duration-long ease-emphasized",
    variable: "--motion-duration-long",
    value: "400ms",
  },
];

const easingTokens = [
  {
    label: "ease-standard",
    variable: "--motion-ease-standard",
    value: "cubic-bezier(0.2, 0, 0, 1)",
  },
  {
    label: "ease-soft",
    variable: "--motion-ease-soft",
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
  },
  {
    label: "ease-emphasized",
    variable: "--motion-ease-emphasized",
    value: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  },
];

export default function StyleguidePage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-12 text-foreground md:px-10">
      <div className="mx-auto max-w-6xl space-y-16">
        <header className="space-y-4">
          <p className="text-xs uppercase tracking-wide text-neutral-500">Styleguide</p>
          <h1 className="font-display text-4xl text-foreground">Design tokens</h1>
          <p className="max-w-2xl text-neutral-600">
            Tailwind tokens mapped to the teal, emerald, and gold palette with minimalist
            surfaces. Use these foundations to build cohesive interfaces across the
            application.
          </p>
        </header>

        <section className="space-y-8" aria-labelledby="colors-heading">
          <div className="space-y-2">
            <h2 id="colors-heading" className="font-display text-3xl text-foreground">
              Color
            </h2>
            <p className="text-neutral-600">
              Brand, neutral, and surface color primitives available as Tailwind utilities.
            </p>
          </div>
          <div className="space-y-10">
            {colorGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                  {group.title}
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.swatches.map((swatch) => (
                    <div
                      key={swatch.name}
                      className="flex flex-col justify-between rounded-lg border border-border bg-surface px-4 py-5"
                    >
                      <div
                        className={`mb-4 h-24 rounded-md ${swatch.className} ${swatch.withBorder ? "border border-dashed border-border" : ""}`}
                      />
                      <div className="space-y-1 text-sm">
                        <p className="font-medium text-foreground">{swatch.name}</p>
                        <p className="text-neutral-600">{swatch.description}</p>
                        <p className="font-mono text-xs text-neutral-500">{swatch.variable}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="typography-heading">
          <div className="space-y-2">
            <h2 id="typography-heading" className="font-display text-3xl text-foreground">
              Typography
            </h2>
            <p className="text-neutral-600">
              Font sizes and families mapped to the typographic scale.
            </p>
          </div>
          <div className="space-y-6 rounded-xl border border-border bg-surface px-6 py-8">
            {typographyTokens.map((token) => (
              <div key={token.label} className="space-y-1">
                <p className={`font-mono text-xs uppercase tracking-wide text-neutral-500`}>{
                  token.label
                }</p>
                <p className={`${token.className} text-foreground`}>The quick brown fox jumps over the lazy dog.</p>
                <p className="text-xs text-neutral-500">{token.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="spacing-heading">
          <div className="space-y-2">
            <h2 id="spacing-heading" className="font-display text-3xl text-foreground">
              Spacing scale
            </h2>
            <p className="text-neutral-600">
              Consistent spacing tokens based on the 8pt grid.
            </p>
          </div>
          <div className="space-y-3 rounded-xl border border-border bg-surface px-6 py-6">
            {spacingTokens.map((token) => (
              <div key={token.label} className="flex items-center gap-6">
                <div className="w-28 font-mono text-xs uppercase tracking-wide text-neutral-500">
                  space-{token.label}
                </div>
                <div className="flex items-center gap-3">
                  <div
                    className="h-3 overflow-hidden rounded-full bg-surface-muted"
                    style={{ width: "var(--space-12)" }}
                  >
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `var(${token.variable})` }}
                    />
                  </div>
                  <div className="font-mono text-xs text-neutral-500">{token.value}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="radii-heading">
          <div className="space-y-2">
            <h2 id="radii-heading" className="font-display text-3xl text-foreground">
              Radii & borders
            </h2>
            <p className="text-neutral-600">
              Tokenized rounded corners and border treatments for minimalist surfaces.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-3 rounded-xl border border-border bg-surface px-6 py-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Corner radius
              </h3>
              <div className="space-y-3">
                {radiusTokens.map((token) => (
                  <div key={token.label} className="flex items-center gap-4">
                    <div className="w-24 font-mono text-xs uppercase tracking-wide text-neutral-500">
                      radius-{token.label}
                    </div>
                    <div
                      className="h-12 flex-1 border border-border bg-surface-muted"
                      style={{ borderRadius: `var(${token.variable})` }}
                    />
                    <div className="font-mono text-xs text-neutral-500">{token.value}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-border bg-surface px-6 py-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Border width
              </h3>
              <div className="space-y-3">
                {borderTokens.map((token) => (
                  <div key={token.label} className="flex items-center gap-4">
                    <div className="w-24 font-mono text-xs uppercase tracking-wide text-neutral-500">
                      border-{token.label}
                    </div>
                    <div className={`h-12 flex-1 rounded-md bg-surface-subtle ${token.className} border-border`} />
                    <div className="font-mono text-xs text-neutral-500">{token.variable}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="components-heading">
          <div className="space-y-2">
            <h2 id="components-heading" className="font-display text-3xl text-foreground">
              Components
            </h2>
            <p className="text-neutral-600">
              Sample UI elements showcasing color, spacing, and typography tokens in action.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 rounded-xl border border-border bg-surface px-6 py-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Buttons
              </h3>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors duration-medium ease-standard hover:bg-primary-emphasis"
                >
                  Primary
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors duration-medium ease-soft hover:border-border-strong hover:bg-surface-subtle"
                >
                  Secondary
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-md border border-transparent px-4 py-2 text-sm font-medium text-neutral-600 transition-colors duration-medium ease-soft hover:text-foreground"
                >
                  Tertiary
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-xl border border-border bg-surface px-6 py-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
                Inputs
              </h3>
              <label className="flex flex-col gap-2 text-sm text-neutral-600">
                <span className="font-medium text-neutral-700">Email</span>
                <input
                  type="email"
                  placeholder="name@company.com"
                  className="w-full rounded-md border border-border bg-surface px-4 py-2 text-foreground placeholder:text-neutral-400 focus:border-border-strong"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-neutral-600">
                <span className="font-medium text-neutral-700">Message</span>
                <textarea
                  rows={3}
                  placeholder="Tell us more about your project..."
                  className="w-full rounded-md border border-border bg-surface px-4 py-2 text-foreground placeholder:text-neutral-400 focus:border-border-strong"
                />
              </label>
            </div>
          </div>
        </section>

        <section className="space-y-8" aria-labelledby="motion-heading">
          <div className="space-y-2">
            <h2 id="motion-heading" className="font-display text-3xl text-foreground">
              Motion
            </h2>
            <p className="text-neutral-600">
              Duration and easing tokens tuned for calm, purposeful motion.
            </p>
          </div>
          <div className="space-y-6 rounded-xl border border-border bg-surface px-6 py-6">
            <div className="space-y-4">
              {motionTokens.map((token) => (
                <div key={token.label} className="group flex items-center gap-6">
                  <div className="w-32 font-mono text-xs uppercase tracking-wide text-neutral-500">
                    {token.label}
                  </div>
                  <div className="relative flex h-10 flex-1 items-center rounded-full bg-surface-subtle px-2">
                    <div
                      className={`h-6 w-6 rounded-full bg-primary transition-transform ${token.className} group-hover:translate-x-12`}
                    />
                  </div>
                  <div className="font-mono text-xs text-neutral-500">
                    {token.variable} · {token.value}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {easingTokens.map((token) => (
                <div key={token.label} className="rounded-lg border border-border bg-surface-subtle px-4 py-4">
                  <p className="font-mono text-xs uppercase tracking-wide text-neutral-500">
                    {token.label}
                  </p>
                  <p className="text-sm text-neutral-600">{token.variable}</p>
                  <p className="text-xs text-neutral-500">{token.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
