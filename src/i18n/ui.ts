// src/i18n/ui.ts
import { header } from "./_header";
import { home } from "./_home";
import { about } from "./_about";
import { why } from "./_why";
import { industries } from "./_industries";
import { incentives } from "./_incentives";
import { regions } from "./_regions";
import { services } from "./_services";
import { footer } from "./_footer";

export const languages = {
  vi: "Tiếng Việt",
  ko: "한국어",
};

export const defaultLang = "vi";

export const ui = {
  vi: {
    ...header.vi,
    ...home.vi,
    ...about.vi,
    ...why.vi,
    ...industries.vi,
    ...incentives.vi,
    ...regions.vi,
    ...services.vi,
    ...footer.vi,
  },
  ko: {
    ...header.ko,
    ...home.ko,
    ...about.ko,
    ...why.ko,
    ...industries.ko,
    ...incentives.ko,
    ...regions.ko,
    ...services.ko,
    ...footer.ko,
  },
} as const; 