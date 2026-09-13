/**
 * Themes & palettes — the visual identity every period references.
 *
 * `THEMES` is the theme reference carried on each period (name + the web
 * app's CSS class names). `PALETTES` is the canonical colour data for each
 * theme; the web app also declares these via CSS custom properties and the
 * native app derives its runtime colours from them.
 *
 * ─── Adding a theme ───────────────────────────────────────────────────────
 * 1. Add its key to `ThemeKey` in `./types`.
 * 2. Add an entry to both `THEMES` and `PALETTES` below.
 * 3. Reference it from a period via `theme: THEMES.<key>`.
 *
 * Generated from the chronicon source data; safe to edit by hand thereafter.
 */
import type { Palette, Theme, ThemeKey } from "./types";

export const THEMES: Record<ThemeKey, Theme> = {
  amber: {
    name: "Amber",
    className: "period-theme-amber",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  azure: {
    name: "Azure",
    className: "period-theme-azure",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  bronze: {
    name: "Bronze",
    className: "period-theme-bronze",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  copper: {
    name: "Copper",
    className: "period-theme-copper",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  crimson: {
    name: "Crimson",
    className: "period-theme-crimson",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  emerald: {
    name: "Emerald",
    className: "period-theme-emerald",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  forest: {
    name: "Forest",
    className: "period-theme-forest",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  gold: {
    name: "Gold",
    className: "period-theme-gold",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  ivory: {
    name: "Ivory",
    className: "period-theme-ivory",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  onyx: {
    name: "Onyx",
    className: "period-theme-onyx",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  rose: {
    name: "Rose",
    className: "period-theme-rose",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  ruby: {
    name: "Ruby",
    className: "period-theme-ruby",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  sage: {
    name: "Sage",
    className: "period-theme-sage",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  sapphire: {
    name: "Sapphire",
    className: "period-theme-sapphire",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  slate: {
    name: "Slate",
    className: "period-theme-slate",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  teal: {
    name: "Teal",
    className: "period-theme-teal",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  terracotta: {
    name: "Terracotta",
    className: "period-theme-terracotta",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
  violet: {
    name: "Violet",
    className: "period-theme-violet",
    backdrop: "period-backdrop",
    frame: "period-frame",
    slider: "period-slider",
    gold: "period-gold",
    goldSoft: "period-gold-soft",
    parchment: "period-parchment",
    panel: "period-menu-panel"
  },
};

export const PALETTES: Record<ThemeKey, Palette> = {
  amber: {
    primary: "#d4a017",
    secondary: "#f0c95a",
    accent: "#b01818",
    bg: "#140b0a",
    deep: "#1a0f0c",
    text: "#f6e7c8",
    body: "alegreya"
  },
  azure: {
    primary: "#2f6fa1",
    secondary: "#7fb4d8",
    accent: "#c08f3d",
    bg: "#0a1621",
    deep: "#0d1c2a",
    text: "#dce9f2",
    body: "cormorant"
  },
  bronze: {
    primary: "#b88a44",
    secondary: "#e0bd83",
    accent: "#6f2f2a",
    bg: "#15100d",
    deep: "#1a130f",
    text: "#f1dfc3",
    body: "alegreya"
  },
  copper: {
    primary: "#b05a32",
    secondary: "#d98a5e",
    accent: "#7a1d22",
    bg: "#140a07",
    deep: "#1b0f0a",
    text: "#f2ddca",
    body: "alegreya"
  },
  crimson: {
    primary: "#b32424",
    secondary: "#e07a7a",
    accent: "#2a2a3a",
    bg: "#0c0708",
    deep: "#120a0b",
    text: "#f3dada",
    body: "alegreya"
  },
  emerald: {
    primary: "#2f7a52",
    secondary: "#76c79a",
    accent: "#8a1f2c",
    bg: "#0a140e",
    deep: "#0d1c14",
    text: "#dff2e6",
    body: "alegreya"
  },
  forest: {
    primary: "#1f6a5c",
    secondary: "#5fb09c",
    accent: "#c8923a",
    bg: "#081210",
    deep: "#0d1a17",
    text: "#daf0e8",
    body: "alegreya"
  },
  gold: {
    primary: "#d4af37",
    secondary: "#e8c66a",
    accent: "#6b1e2c",
    bg: "#0a0412",
    deep: "#0e0716",
    text: "#f4e8c1",
    body: "cormorant"
  },
  ivory: {
    primary: "#c9b56e",
    secondary: "#ebe0b8",
    accent: "#1a3a6b",
    bg: "#0a0a0d",
    deep: "#101015",
    text: "#f3eeda",
    body: "cormorant"
  },
  onyx: {
    primary: "#8a8a8a",
    secondary: "#c0c0c0",
    accent: "#6a1a1a",
    bg: "#050506",
    deep: "#0a0a0c",
    text: "#e0e0e0",
    body: "alegreya"
  },
  rose: {
    primary: "#8a1f3a",
    secondary: "#d07a92",
    accent: "#2c4a7e",
    bg: "#100a0d",
    deep: "#170f13",
    text: "#f2dde3",
    body: "cormorant"
  },
  ruby: {
    primary: "#9c2a2a",
    secondary: "#d06a6a",
    accent: "#1f2a4a",
    bg: "#100806",
    deep: "#170b09",
    text: "#f2d9d2",
    body: "alegreya"
  },
  sage: {
    primary: "#7d8b5c",
    secondary: "#b3bd8c",
    accent: "#5a3a2a",
    bg: "#0e120e",
    deep: "#141813",
    text: "#e9efdc",
    body: "alegreya"
  },
  sapphire: {
    primary: "#2a5fc0",
    secondary: "#7c9fe0",
    accent: "#d8c267",
    bg: "#070b14",
    deep: "#0c1220",
    text: "#dde6f5",
    body: "alegreya"
  },
  slate: {
    primary: "#5a6470",
    secondary: "#95a2b0",
    accent: "#a8201f",
    bg: "#0d0e10",
    deep: "#131417",
    text: "#dde2e8",
    body: "alegreya"
  },
  teal: {
    primary: "#3d7a6a",
    secondary: "#7ec2ad",
    accent: "#9a6f34",
    bg: "#081511",
    deep: "#0d1f19",
    text: "#def2e9",
    body: "alegreya"
  },
  terracotta: {
    primary: "#c97b3d",
    secondary: "#e3a567",
    accent: "#6e3a26",
    bg: "#15100a",
    deep: "#1c130c",
    text: "#f3e2cc",
    body: "alegreya"
  },
  violet: {
    primary: "#6b3a7a",
    secondary: "#b07fc0",
    accent: "#b22c3a",
    bg: "#0c0a14",
    deep: "#120e1c",
    text: "#ece0f2",
    body: "cormorant"
  },
};
