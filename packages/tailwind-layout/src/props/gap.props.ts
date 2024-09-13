import type { PropDef } from "./prop-def.js"

const gapValues = [
  "0",
  "0.5",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
] as const

const gapPropDefs = {
  /**
   * Sets the CSS **gap** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * gap="4"
   * gap="20px"
   * gap={{ sm: '2', lg: '3em' }}
   *
   * @link
   * https://tailwindcss.com/docs/gap
   */
  gap: {
    type: "enum | string",
    prefix: "gap",
    customProperties: ["--gap"],
    values: gapValues,
    responsive: true,
  },
  /**
   * Sets the CSS **row-gap** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * gapX="4"
   * gapX="20px"
   * gapX={{ sm: '2', lg: '3em' }}
   *
   * @link
   * https://tailwindcss.com/docs/gap
   */
  gapX: {
    type: "enum | string",
    prefix: "gap-x",
    customProperties: ["--column-gap"],
    values: gapValues,
    responsive: true,
  },
  /**
   * Sets the CSS **column-gap** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * gapY="4"
   * gapY="20px"
   * gapY={{ sm: '2', lg: '3em' }}
   *
   * @link
   * https://tailwindcss.com/docs/gap
   */
  gapY: {
    type: "enum | string",
    prefix: "gap-y",
    customProperties: ["--row-gap"],
    values: gapValues,
    responsive: true,
  },
} satisfies {
  gap: PropDef<(typeof gapValues)[number]>
  gapX: PropDef<(typeof gapValues)[number]>
  gapY: PropDef<(typeof gapValues)[number]>
}

export { gapPropDefs }
