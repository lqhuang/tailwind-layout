import { heightPropDefs } from "./height.props.js"
import { paddingPropDefs } from "./padding.props.js"
import { widthPropDefs } from "./width.props.js"

import type { GetPropDefTypes, PropDef } from "./prop-def.js"

const overflowValues = ["visible", "hidden", "clip", "scroll", "auto"] as const
const positionValues = [
  "static",
  "fixed",
  "absolute",
  "relative",
  "sticky",
] as const
// prettier-ignore
const positionEdgeValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-1', '-2', '-3', '-4', '-5', '-6', '-7', '-8', '-9'] as const;
const flexShrinkValues = ["0", "1"] as const
const flexGrowValues = ["0", "1"] as const

const layoutPropDefs = {
  ...paddingPropDefs,
  ...widthPropDefs,
  ...heightPropDefs,
  /**
   * Sets the CSS **position** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * position="absolute"
   * position={{ sm: 'absolute', lg: 'sticky' }}
   *
   * @link
   * https://tailwindcss.com/docs/position
   */
  position: {
    type: "enum",
    prefix: undefined,
    values: positionValues,
    responsive: true,
  },
  /**
   * Sets the CSS **inset** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * inset="4"
   * inset="100px"
   * inset={{ sm: '0', lg: '50%' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/inset
   */
  inset: {
    type: "enum | string",
    prefix: "inset",
    customProperties: ["--inset"],
    values: positionEdgeValues,
    responsive: true,
  },
  /**
   * Sets the CSS **top** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * top="4"
   * top="100px"
   * top={{ sm: '0', lg: '50%' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/top
   */
  top: {
    type: "enum | string",
    prefix: "top",
    customProperties: ["--top"],
    values: positionEdgeValues,
    responsive: true,
  },
  /**
   * Sets the CSS **right** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * right="4"
   * right="100px"
   * right={{ sm: '0', lg: '50%' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/right
   */
  right: {
    type: "enum | string",
    prefix: "right",
    customProperties: ["--right"],
    values: positionEdgeValues,
    responsive: true,
  },
  /**
   * Sets the CSS **bottom** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * bottom="4"
   * bottom="100px"
   * bottom={{ sm: '0', lg: '50%' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/bottom
   */
  bottom: {
    type: "enum | string",
    prefix: "bottom",
    customProperties: ["--bottom"],
    values: positionEdgeValues,
    responsive: true,
  },
  /**
   * Sets the CSS **left** property.
   * Supports space scale values, CSS strings, and responsive objects.
   *
   * @example
   * left="4"
   * left="100px"
   * left={{ sm: '0', lg: '50%' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/left
   */
  left: {
    type: "enum | string",
    prefix: "left",
    customProperties: ["--left"],
    values: positionEdgeValues,
    responsive: true,
  },
  /**
   * Sets the CSS **overflow** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * overflow="hidden"
   * overflow={{ sm: 'hidden', lg: 'visible' }}
   *
   * @link
   * https://tailwindcss.com/docs/overflow
   */
  overflow: {
    type: "enum",
    prefix: "overflow",
    values: overflowValues,
    responsive: true,
  },
  /**
   * Sets the CSS **overflow-x** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * overflowX="hidden"
   * overflowX={{ sm: 'hidden', md: 'visible' }}
   *
   * @link
   * https://tailwindcss.com/docs/overflow
   */
  overflowX: {
    type: "enum",
    prefix: "ox",
    values: overflowValues,
    responsive: true,
  },
  /**
   * Sets the CSS **overflow-y** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * overflowY="hidden"
   * overflowY={{ sm: 'hidden', md: 'visible' }}
   *
   * @link
   * https://tailwindcss.com/docs/overflow
   */
  overflowY: {
    type: "enum",
    prefix: "oy",
    values: overflowValues,
    responsive: true,
  },
  /**
   * Sets the CSS **flex-basis** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * flexBasis="0"
   * flexBasis="100%"
   * flexBasis={{ sm: '200px', lg: 'auto' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
   */
  // flexBasis: {
  //   type: "string",
  //   prefix: "basis",
  //   customProperties: ["--flex-basis"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **flex-shrink** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * flexShrink="0"
   * flexShrink="1"
   * flexShrink={{ sm: '0', lg: '1' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
   */
  // flexShrink: {
  //   type: "enum | string",
  //   prefix: "shrink",
  //   customProperties: ["--flex-shrink"],
  //   values: flexShrinkValues,
  //   responsive: true,
  // },
  /**
   * Sets the CSS **flex-grow** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * flexGrow="0"
   * flexGrow="1"
   * flexGrow={{ sm: '0', lg: '1' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  // flexGrow: {
  //   type: "enum | string",
  //   prefix: "grow",
  //   customProperties: ["--flex-grow"],
  //   values: flexGrowValues,
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-area** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridArea="header"
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area
   */
  // gridArea: {
  //   type: "string",
  //   prefix: "ga",
  //   customProperties: ["--grid-area"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-column** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridColumn="1"
   * gridColumn="1 / -1"
   * gridColumn={{ sm: '1 / 3', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column
   */
  // gridColumn: {
  //   type: "string",
  //   prefix: "gc",
  //   customProperties: ["--grid-column"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-column-start** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridColumnStart="1"
   * gridColumnStart="auto"
   * gridColumnStart={{ sm: '2', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start
   */
  // gridColumnStart: {
  //   type: "string",
  //   prefix: "gcs",
  //   customProperties: ["--grid-column-start"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-column-end** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridColumnEnd="1"
   * gridColumnEnd="auto"
   * gridColumnEnd={{ sm: '2', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end
   */
  // gridColumnEnd: {
  //   type: "string",
  //   prefix: "gce",
  //   customProperties: ["--grid-column-end"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-row** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridRow="1"
   * gridRow="auto"
   * gridRow={{ sm: '2', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row
   */
  // gridRow: {
  //   type: "string",
  //   prefix: "gr",
  //   customProperties: ["--grid-row"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-row-start** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridRowStart="1"
   * gridRowStart="auto"
   * gridRowStart={{ sm: '2', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start
   */
  // gridRowStart: {
  //   type: "string",
  //   prefix: "grs",
  //   customProperties: ["--grid-row-start"],
  //   responsive: true,
  // },
  /**
   * Sets the CSS **grid-row-end** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * gridRowEnd="1"
   * gridRowEnd="auto"
   * gridRowEnd={{ sm: '2', lg: 'span 3' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end
   */
  // gridRowEnd: {
  //   type: "string",
  //   prefix: "gre",
  //   customProperties: ["--grid-row-end"],
  //   responsive: true,
  // },
} satisfies {
  position: PropDef<(typeof positionValues)[number]>
  inset: PropDef<(typeof positionEdgeValues)[number]>
  top: PropDef<(typeof positionEdgeValues)[number]>
  right: PropDef<(typeof positionEdgeValues)[number]>
  bottom: PropDef<(typeof positionEdgeValues)[number]>
  left: PropDef<(typeof positionEdgeValues)[number]>
  overflow: PropDef<(typeof overflowValues)[number]>
  overflowX: PropDef<(typeof overflowValues)[number]>
  overflowY: PropDef<(typeof overflowValues)[number]>
  // flexBasis: PropDef<string>
  // flexShrink: PropDef<(typeof flexShrinkValues)[number]>
  // flexGrow: PropDef<(typeof flexGrowValues)[number]>
  // gridColumn: PropDef<string>
  // gridColumnStart: PropDef<string>
  // gridColumnEnd: PropDef<string>
  // gridRow: PropDef<string>
  // gridRowStart: PropDef<string>
  // gridRowEnd: PropDef<string>
  // gridArea: PropDef<string>
}

// Use all of the imported prop defs to ensure that JSDoc works
type LayoutProps = GetPropDefTypes<
  typeof paddingPropDefs &
    typeof widthPropDefs &
    typeof heightPropDefs &
    typeof layoutPropDefs
>

export { layoutPropDefs }
export type { LayoutProps }
