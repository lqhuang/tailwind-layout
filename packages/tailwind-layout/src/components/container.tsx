import type {
  ComponentPropsWithout,
  RemovedProps,
} from '../helpers/component-props'
import type { LayoutProps } from '../props/layout.props'
import type { MarginProps } from '../props/margin.props'
import type { ContainerOwnProps } from './container.props'

import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'

import { extractProps } from '../helpers/extract-props'
import { getSubtree } from '../helpers/get-subtree'
import { heightPropDefs } from '../props/height.props'
import { layoutPropDefs } from '../props/layout.props'
import { marginPropDefs } from '../props/margin.props'
import { widthPropDefs } from '../props/width.props'
import { cn } from '../utils'

import { containerPropDefs } from './container.props'

type ContainerElement = React.ElementRef<'div'>
interface ContainerProps
  extends ComponentPropsWithout<'div', RemovedProps>,
    MarginProps,
    LayoutProps,
    ContainerOwnProps {}
const Container = React.forwardRef<ContainerElement, ContainerProps>(
  (
    { width, minWidth, maxWidth, height, minHeight, maxHeight, ...props },
    forwardedRef,
  ) => {
    const { asChild, children, className, ...containerProps } = extractProps(
      props,
      containerPropDefs,
      layoutPropDefs,
      marginPropDefs,
    )

    const { className: innerClassName, style: innerStyle } = extractProps(
      { width, minWidth, maxWidth, height, minHeight, maxHeight },
      widthPropDefs,
      heightPropDefs,
    )

    const Comp = asChild ? Slot : 'div'

    return (
      <Comp
        {...containerProps}
        ref={forwardedRef}
        className={cn('rt-Container', className)}
      >
        {getSubtree({ asChild, children }, children => (
          <div
            className={cn('rt-ContainerInner', innerClassName)}
            style={innerStyle}
          >
            {children}
          </div>
        ))}
      </Comp>
    )
  },
)
Container.displayName = 'Container'

export { Container }
export type { ContainerProps }
