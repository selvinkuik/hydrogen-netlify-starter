import renderHydrogen from '@shopify/hydrogen/entry-server';
import {
  FileRoutes,
  Route,
  Router,
  ShopifyProvider,
} from '@shopify/hydrogen';
import {NotFound} from '~/components/index.server';

function App({request}) {
  const pathname = new URL(request.normalizedUrl).pathname;
  const localeMatch = /^\/([a-z]{2})(\/|$)/i.exec(pathname);
  const countryCode = localeMatch ? localeMatch[1] : undefined;

  const isHome = pathname === `/${countryCode ? countryCode + '/' : ''}`;

  return (
      <ShopifyProvider countryCode={countryCode}>
          <Router>
            <FileRoutes
              basePath={countryCode ? `/${countryCode}/` : undefined}
            />
            <Route path="*" page={<NotFound />} />
          </Router>
      </ShopifyProvider>
  );
}

export default renderHydrogen(App);
