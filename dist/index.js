import { jsx as o, jsxs as i } from "react/jsx-runtime";
import { styled as m } from "styled-components";
import { forwardRef as d, useEffect as f } from "react";
import * as n from "@radix-ui/react-slider";
import { clsx as u } from "clsx";
import { clsx as z } from "clsx";
const S = ["icon", "link", "primary", "secondary", "tertiary"], T = (c) => {
  const { as: t = "button", fullWidth: e, variant: r = "primary", ...a } = c;
  return /* @__PURE__ */ o(b, { as: t, variant: r, ...a });
}, b = m.button`
  all: unset;

  cursor: pointer;

  box-sizing: border-box;
  padding: 0.5rem 1rem;

  border-radius: 0.25rem;

  &:focus-visible {
    outline: 2px solid lightcoral;
    outline-offset: 2px;
  }

  ${({ variant: c }) => {
  switch (c) {
    case "primary":
      return `
          background-color: #00f;
          color: #fff;
        `;
    case "secondary":
      return `
          background-color: #f00;
          color: #fff;
        `;
    case "tertiary":
      return `
          background-color: #fff;
          color: #000;
        `;
    case "icon":
      return `
          background-color: transparent;
          color: #000;
        `;
    case "link":
      return `
          background-color: transparent;
          color: #00f;
        `;
  }
}}
`, p = "_container_1j06o_1", _ = "_root_1j06o_9", h = "_track_1j06o_18", k = "_range_1j06o_27", y = "_thumb_1j06o_33", s = {
  container: p,
  root: _,
  track: h,
  range: k,
  thumb: y
}, g = d(({ className: c, max: t, onValueChange: e, value: r, ...a }, l) => (f(() => {
  (r?.[1] === void 0 || r?.[1] === null) && e?.([r?.[0] ?? 0, t ?? 0]);
}, [t, r, e]), /* @__PURE__ */ i("div", { className: s.container, children: [
  /* @__PURE__ */ o("span", { children: r?.[0] }),
  /* @__PURE__ */ i(
    n.Root,
    {
      className: u(s.root, c),
      max: t,
      onValueChange: e,
      ref: l,
      ...a,
      value: [r?.[0] ?? 0, r?.[1] ?? t ?? 0],
      children: [
        /* @__PURE__ */ o(n.Track, { className: s.track, children: /* @__PURE__ */ o(n.Range, { className: "absolute h-full bg-primary" }) }),
        /* @__PURE__ */ o(n.Thumb, { className: s.thumb }),
        /* @__PURE__ */ o(n.Thumb, { className: s.thumb })
      ]
    }
  ),
  /* @__PURE__ */ o("span", { children: r?.[1] })
] })));
g.displayName = n.Root.displayName;
export {
  T as Button,
  g as Slider,
  S as buttonVariant,
  z as clsx
};
//# sourceMappingURL=index.js.map
