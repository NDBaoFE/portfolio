import React, { useState, useEffect } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
    children,
}: {
    children: React.ReactNode;
}) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    useEffect(() => {
        // Clear the styled-components styles after rendering
        return () => {
            styledComponentsStyleSheet.seal();
        };
    }, []); // Run this effect only once

    // Use the ServerStyleSheet instance in StyleSheetManager
    return (
        <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
            {children}
        </StyleSheetManager>
    );
}
