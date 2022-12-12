import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Stack } from "@mui/material";
import { NavBar, ACard } from "@molecules";
import { PrimaryButton } from "@atoms";
import { theme } from "../theme";
import { ThemeProvider, styled } from "@mui/material/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth="sm">
          <Component {...pageProps} />
          <ACard />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
