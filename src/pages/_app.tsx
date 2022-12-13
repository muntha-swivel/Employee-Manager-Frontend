import type { AppProps } from "next/app";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Container, Stack, CssBaseline } from "@mui/material";
import { NavBar, ACard } from "@molecules";
import { PrimaryButton } from "@atoms";
import { theme } from "../theme";
import { ThemeProvider, styled } from "@mui/material/styles";
import { wrapper } from "../app/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <div>
            <Container maxWidth="lg" sx={{ mt: 2 }}>
              <Component {...pageProps} />
            </Container>
          </div>
        </main>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(MyApp);
