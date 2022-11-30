import dynamic from "next/dynamic";
import React from "react";
const NonSSRWrapper = (props: any) => (
  <React.Fragment>{props.children}</React.Fragment>
);
export default dynamic(() => Promise.resolve(NonSSRWrapper), {
  ssr: false
});

// 請加在 index.tsx
// <NonSSRWrapper> 包覆 </NonSSRWrapper>
// 解決 hydration error