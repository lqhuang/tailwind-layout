import type {
  ComponentPropsWithout,
  RemovedProps,
} from "../helpers/component-props"
import type { LayoutProps } from "../props/layout.props.js"
import type { MarginProps } from "../props/margin.props.js"
import type { FlexOwnProps } from "./flex.props.js"

import * as React from "react"

import { extractProps } from "../helpers/extract-props"
import { layoutPropDefs } from "../props/layout.props"
import { marginPropDefs } from "../props/margin.props"

import { cn } from "../utils"
import { flexPropDefs } from "./flex.props"
import { Slot } from "./slot"

type FlexElement = React.ElementRef<"div">
interface CommonFlexProps extends MarginProps, LayoutProps, FlexOwnProps {}
type FlexDivProps = { as?: "div" } & ComponentPropsWithout<"div", RemovedProps>
type FlexSpanProps = { as: "span" } & ComponentPropsWithout<
  "span",
  RemovedProps
>
type FlexProps = CommonFlexProps & (FlexSpanProps | FlexDivProps)

const Flex = React.forwardRef<FlexElement, FlexProps>((props, forwardedRef) => {
  const {
    className,
    asChild,
    as: Tag = "div",
    ...flexProps
  } = extractProps(props, flexPropDefs, layoutPropDefs, marginPropDefs)
  const Comp = asChild ? Slot : Tag
  return (
    <Comp
      {...flexProps}
      ref={forwardedRef}
      className={cn(className, "flex justify-start")}
    />
  )
})
Flex.displayName = "Flex"

export { Flex }
export type { FlexProps }
