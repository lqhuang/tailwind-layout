import type { GetPropDefTypes, PropDef } from './prop-def'

const heightPropDefs = {
  /**
   * Sets the CSS **height** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * height="100px"
   * height={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/height
   */
  height: {
    type: 'string',
    prefix: 'h',
    customProperties: ['--height'],
    responsive: true,
  },
  /**
   * Sets the CSS **min-height** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * minHeight="100px"
   * minHeight={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
   */
  minHeight: {
    type: 'string',
    prefix: 'min-h',
    customProperties: ['--min-height'],
    responsive: true,
  },
  /**
   * Sets the CSS **max-height** property.
   * Supports CSS strings and responsive objects.
   *
   * @example
   * maxHeight="100px"
   * maxHeight={{ md: '100vh', xl: '600px' }}
   *
   * @link
   * https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
   */
  maxHeight: {
    type: 'string',
    prefix: 'max-h',
    customProperties: ['--max-height'],
    responsive: true,
  },
} satisfies {
  height: PropDef<string>
  minHeight: PropDef<string>
  maxHeight: PropDef<string>
}

type HeightProps = GetPropDefTypes<typeof heightPropDefs>

export { heightPropDefs }
export type { HeightProps }
