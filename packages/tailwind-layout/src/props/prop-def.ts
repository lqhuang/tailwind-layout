import type * as React from 'react'

// Creates a union type of string literals with strings, but retains intellisense for the literals.
// Union<string, 'foo' | 'bar'> => string | Omit<string, 'foo' | 'bar'>
type Union<S = string, T extends string | number = string> = T | Omit<S, T>

const breakpoints = ['initial', 'xs', 'sm', 'md', 'lg', 'xl'] as const
type Breakpoint = (typeof breakpoints)[number]
type Responsive<T> = T | Partial<Record<Breakpoint, T>>

type BooleanPropDef = {
  type: 'boolean'
  default?: boolean
  required?: boolean
  className?: string
}
type StringPropDef = {
  type: 'string'
  default?: string
  required?: boolean
}
type ReactNodePropDef = {
  type: 'ReactNode'
  default?: React.ReactNode
  required?: boolean
}
type EnumPropDef<T> = {
  type: 'enum'
  values: readonly T[]
  default?: T
  required?: boolean
}
type EnumOrStringPropDef<T> = {
  type: 'enum | string'
  values: readonly T[]
  default?: T | string
  required?: boolean
}

type NonStylingPropDef = {
  prefix?: never
  customProperties?: never
  parseValue?: never
}

type StylingPropDef = {
  prefix: string
  parseValue?: (value: string) => string | undefined
}

type ArbitraryStylingPropDef = {
  prefix: string
  customProperties: `--${string}`[]
  parseValue?: (value: string) => string | undefined
}

type RegularPropDef<T> =
  | ReactNodePropDef
  | BooleanPropDef
  | (StringPropDef & ArbitraryStylingPropDef)
  | (StringPropDef & NonStylingPropDef)
  | (EnumPropDef<T> & StylingPropDef)
  | (EnumPropDef<T> & NonStylingPropDef)
  | (EnumOrStringPropDef<T> & ArbitraryStylingPropDef)
  | (EnumOrStringPropDef<T> & NonStylingPropDef)
type ResponsivePropDef<T = unknown> = RegularPropDef<T> & { responsive: true }
type PropDef<T = unknown> = RegularPropDef<T> | ResponsivePropDef<T>

// prettier-ignore
type GetPropDefType<Def> =
    Def extends BooleanPropDef ? (Def extends ResponsivePropDef ? Responsive<boolean> : boolean)
  : Def extends StringPropDef ? (Def extends ResponsivePropDef ? Responsive<string> : string)
  : Def extends ReactNodePropDef ? (Def extends ResponsivePropDef ? Responsive<React.ReactNode> : React.ReactNode)
  : Def extends EnumOrStringPropDef<infer Type> ?
    Def extends ResponsivePropDef<infer Type extends string> ? Responsive<Union<string, Type>> : Type
  : Def extends EnumPropDef<infer Type> ? (Def extends ResponsivePropDef<infer Type> ? Responsive<Type> : Type)
  : never;

type GetPropDefTypes<P> = {
  [K in keyof P]?: GetPropDefType<P[K]>
}

export { breakpoints }

export type { GetPropDefTypes, PropDef, ResponsivePropDef }

export type { Breakpoint, Responsive, Union }
