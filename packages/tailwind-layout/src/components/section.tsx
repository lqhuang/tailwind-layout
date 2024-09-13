import type {
  ComponentPropsWithout,
  RemovedProps,
} from "../helpers/component-props.js"
import type { LayoutProps } from "../props/layout.props.js"
import type { MarginProps } from "../props/margin.props.js"
import type { SectionOwnProps } from "./section.props.js"

import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { cn } from "../utils.js"

import { extractProps } from "../helpers/extract-props.js"
import { layoutPropDefs } from "../props/layout.props.js"
import { marginPropDefs } from "../props/margin.props.js"
import { sectionPropDefs } from "./section.props.js"

type SectionElement = React.ElementRef<"div">
interface SectionProps
  extends ComponentPropsWithout<"div", RemovedProps>,
    MarginProps,
    LayoutProps,
    SectionOwnProps {}
const Section = React.forwardRef<SectionElement, SectionProps>(
  (props, forwardedRef) => {
    const { asChild, className, ...sectionProps } = extractProps(
      props,
      sectionPropDefs,
      layoutPropDefs,
      marginPropDefs
    )
    const Comp = asChild ? Slot : "section"
    return (
      <Comp
        {...sectionProps}
        ref={forwardedRef}
        className={cn("rt-Section", className)}
      />
    )
  }
)
Section.displayName = "Section"

export { Section }
export type { SectionProps }
