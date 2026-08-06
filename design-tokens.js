const tokens = {

  // ─── Color: Backgrounds ────────────────────────────────────────────────────
  color: {
    bg:       "oklch(0.09  0.005 265)",   // page floor
    bg1:      "oklch(0.11  0.005 265)",   // raised surface
    bg2:      "oklch(0.135 0.006 265)",   // elevated card
    bg3:      "oklch(0.16  0.007 265)",   // highest card

    // Text
    textHi:   "oklch(0.93  0.005  70)",   // headings, hero
    textMd:   "oklch(0.76  0.008  70)",   // body copy  ≥4.5:1
    textLo:   "oklch(0.60  0.006  70)",   // labels     ≥3:1
    textDim:  "oklch(0.47  0.005  70)",   // placeholder/disabled

    // Accent
    gold:     "oklch(0.72  0.08   75)",
    goldDim:  "oklch(0.72  0.08   75 / 0.10)",
    goldBd:   "oklch(0.72  0.08   75 / 0.30)",

    // Borders
    bd:       "oklch(0.93  0      0  / 0.07)",  // subtle
    bd1:      "oklch(0.93  0      0  / 0.13)",  // medium
    bd2:      "oklch(0.93  0      0  / 0.22)",  // strong

    // Strip (inverted section)
    stripBg:  "oklch(0.72  0.08   75)",          // = gold
    stripInk: "oklch(0.10  0.005 265)",
    stripSub: "oklch(0.10  0.005 265 / 0.55)",
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  fontFamily: {
    serif: "'Cormorant Garamond', Georgia, serif",
    sans:  "'Instrument Sans', system-ui, sans-serif",
    mono:  "'DM Mono', 'Courier New', monospace",
  },

  // Type scale — Major Third (1.25×)
  fontSize: {
    "2xs":  "0.64rem",    //  ~10px  labels
    xs:     "0.75rem",    //  ~12px
    sm:     "0.875rem",   //  ~14px  body-sm
    base:   "1rem",       //   16px  body
    lg:     "1.25rem",    //   20px
    xl:     "1.5rem",     //   24px
    "2xl":  "2rem",       //   32px
    "3xl":  "2.5rem",     //   40px
    "4xl":  "3.25rem",    //   52px
    "5xl":  "4.5rem",     //   72px
  },

  // ─── Spacing (8px base) ────────────────────────────────────────────────────
  spacing: {
    1:  "0.25rem",   //   4px
    2:  "0.5rem",    //   8px
    3:  "0.75rem",   //  12px
    4:  "1rem",      //  16px
    5:  "1.25rem",   //  20px
    6:  "1.5rem",    //  24px
    8:  "2rem",      //  32px
    10: "2.5rem",    //  40px
    12: "3rem",      //  48px
    16: "4rem",      //  64px
    20: "5rem",      //  80px
    24: "6rem",      //  96px
    28: "7rem",      // 112px
  },

  // ─── Layout ────────────────────────────────────────────────────────────────
  layout: {
    sectionY: "6rem",      // = sp-24
    sectionX: "3rem",      // = sp-12
    innerMax: "1140px",
  },

  // ─── Radius ────────────────────────────────────────────────────────────────
  borderRadius: {
    sm: "4px",
    md: "8px",
  },

  // ─── Motion ────────────────────────────────────────────────────────────────
  easing: {
    out:   "cubic-bezier(0.22, 1, 0.36, 1)",
    inOut: "cubic-bezier(0.4,  0, 0.2, 1)",
  },

  duration: {
    fast:  "160ms",
    base:  "260ms",
    slow:  "500ms",
    enter: "640ms",
  },

  // ─── Z-index ───────────────────────────────────────────────────────────────
  zIndex: {
    base:  0,
    above: 10,
    nav:   50,
    modal: 100,
  },
};

export default tokens;
