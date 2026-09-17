import type { MDXComponents } from "mdx/types"
import Image from "next/image"

import { Plate } from "@/components/portfolio/kit"

type MdastNode = { type: string; children?: MdastNode[] }

/**
 * A standalone `![alt](src)` line is parsed as a paragraph wrapping a single
 * image node — remark's normal behavior. Our `img` override renders a
 * `Plate` (a `div`), and a `div` inside a `p` is invalid HTML and breaks
 * hydration, so lift that image out of its paragraph before rendering.
 */
export function remarkUnwrapImages() {
  return (tree: MdastNode) => {
    function visit(node: MdastNode) {
      if (!node.children) return
      node.children = node.children.flatMap((child) => {
        if (child.type === "paragraph" && child.children?.length === 1 && child.children[0].type === "image") {
          return child.children[0]
        }
        visit(child)
        return child
      })
    }
    visit(tree)
  }
}

/**
 * Renders MDX case-study bodies through the "Exploded Assembly" world instead
 * of bare HTML — same headings, keylines, and bullet language as the rest of
 * the site. Not a React hook despite the shape — plain component map used by
 * `compileMDX` in the project detail route.
 */
export function mdxComponents(): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="mt-10 font-display text-xl tracking-tight text-ink uppercase first:mt-0 sm:text-2xl"
        {...props}
      />
    ),
    h3: (props) => (
      <h3 className="mt-6 font-display text-base tracking-tight text-ink uppercase" {...props} />
    ),
    p: (props) => <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-ink" {...props} />,
    ul: (props) => <ul className="mt-3 flex max-w-[64ch] flex-col gap-2 text-sm text-ink" {...props} />,
    li: ({ children }) => (
      <li className="flex gap-2.5">
        <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-bolt" />
        <span>{children}</span>
      </li>
    ),
    a: (props) => (
      <a className="font-medium text-bolt underline-offset-4 hover:underline" {...props} />
    ),
    strong: (props) => <strong className="font-semibold text-ink" {...props} />,
    code: (props) => (
      <code className="border border-ink bg-paper px-1 py-0.5 font-mono text-[0.8em]" {...props} />
    ),
    img: ({ src, alt }) => (
      <Plate className="mt-5 overflow-hidden p-1.5">
        <Image
          src={typeof src === "string" ? src : ""}
          alt={alt ?? ""}
          width={1200}
          height={750}
          className="h-auto w-full"
          sizes="(min-width: 640px) 640px, 100vw"
        />
      </Plate>
    ),
  }
}
