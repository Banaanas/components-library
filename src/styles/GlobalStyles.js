import React from "react";
import { css, Global, useTheme } from "@emotion/react";
import NormalizeCSS from "./normalize.css";

// Emotion Global Styles - With Materialize
const GlobalStyles = () => {
  const theme = useTheme();

  return (
    <Global
      // CSS Format
      styles={css`
        ${NormalizeCSS}
        *,*::before,*::after {
          box-sizing: inherit;
        }
        html {
          box-sizing: border-box;
          height: 100%;
          font-size: 62.5%;
        }
        body {
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
        }

        #root {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          min-width: 300px;
          min-height: 100%;
          color: ${theme.colors.secondary.light};
          background-color: ${theme.colors.primary.dark};
        }
      `}
    />
  );
};

export default GlobalStyles;
