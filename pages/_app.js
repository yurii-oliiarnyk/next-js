export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        html {
          font-family: "Roboto", sans-serif;
        }
      `}</style>
    </>
  );
}
