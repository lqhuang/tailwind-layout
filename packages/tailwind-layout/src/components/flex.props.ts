import { asChildPropDef } from '../props/as-child.prop'
import { gapPropDefs } from '../props/gap.props'

import type { GetPropDefTypes, PropDef } from '../props/prop-def'

const as = ['div', 'span'] as const
const displayValues = ['hidden', 'inline-flex', 'flex'] as const
const directionValues = ['row', 'col', 'row-reverse', 'col-reverse'] as const
const alignValues = ['start', 'end', 'center', 'baseline', 'stretch'] as const
const justifyValues = [
  'normal',
  'start',
  'end',
  'center',
  'between',
  'around',
  'evenly',
  'stretch',
] as const
const wrapValues = ['nowrap', 'wrap', 'wrap-reverse'] as const

const flexPropDefs = {
  ...asChildPropDef,
  /**
   * Controls whether to render **div** or **span**
   *
   * @example
   * as="div"
   * as="span"
   */
  as: { type: 'enum', values: as, default: 'div' },

  /**
   * Sets the CSS **display** property.
   * Supports a subset of the corresponding CSS values and responsive objects.
   *
   * @example
   * display="inline-flex"
   * display={{ sm: 'none', lg: 'flex' }}
   *
   * @link
   * https://tailwindcss.com/docs/display
   */
  display: {
    type: 'enum',
    prefix: '',
    values: displayValues,
    responsive: true,
    default: 'flex',
  },

  /**
   * Sets the CSS **flex-direction** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * direction="column"
   * direction={{ sm: 'column', lg: 'row' }}
   *
   * @link
   * https://tailwindcss.com/docs/flex-direction
   */
  direction: {
    type: 'enum',
    prefix: 'flex',
    values: directionValues,
    responsive: true,
  },
  /**
   * Sets the CSS **align-items** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * align="center"
   * align={{ sm: 'baseline', lg: 'center' }}
   *
   * @link
   * https://tailwindcss.com/docs/align-items
   */
  align: {
    type: 'enum',
    prefix: 'align',
    values: alignValues,
    responsive: true,
  },
  /**
   * Sets the CSS **justify-content** property.
   * Supports a subset of the corresponding CSS values and responsive objects.
   *
   * @example
   * justify="between"
   * justify={{ sm: 'start', lg: 'center' }}
   *
   * @link
   * https://tailwindcss.com/docs/justify-content
   */
  justify: {
    type: 'enum',
    prefix: 'justify',
    values: justifyValues,
    responsive: true,
  },
  /**
   * Sets the CSS **flex-wrap** property.
   * Supports the corresponding CSS values and responsive objects.
   *
   * @example
   * wrap="wrap"
   * wrap={{ sm: 'wrap', lg: 'nowrap' }}
   *
   * @link
   * https://tailwindcss.com/docs/flex-wrap
   */
  wrap: {
    type: 'enum',
    prefix: 'wrap',
    values: wrapValues,
    responsive: true,
  },
  ...gapPropDefs,
} satisfies {
  as: PropDef<(typeof as)[number]>
  display: PropDef<(typeof displayValues)[number]>
  direction: PropDef<(typeof directionValues)[number]>
  align: PropDef<(typeof alignValues)[number]>
  justify: PropDef<(typeof justifyValues)[number]>
  wrap: PropDef<(typeof wrapValues)[number]>
}

// Use all of the imported prop defs to ensure that JSDoc works
type FlexOwnProps = GetPropDefTypes<
  typeof flexPropDefs & typeof gapPropDefs & typeof asChildPropDef
>

export { flexPropDefs }
export type { FlexOwnProps }
