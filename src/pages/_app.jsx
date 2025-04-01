import StyleFix from '../components/StyleFix';
import '../app/globals.css';

export default function AppWrapper({ Component, pageProps }) {
  return (
    <StyleFix>
      <Component {...pageProps} />
    </StyleFix>
  );
}
