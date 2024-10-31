import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import Header from "./header";
import React from "react";
import { LogoIcon } from "@/components/logo-icon";

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2
      Header={Header}
      Title={(titleProps) => (
        <ThemedTitleV2 {...titleProps} icon={<LogoIcon />} text="Dashbord" />
      )}
    >
      {children}
    </ThemedLayoutV2>
  );
};

export default Layout;
