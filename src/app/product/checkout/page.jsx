
import { CONFIG } from 'src/config-global';

import { CheckoutView } from '../../../sections/checkout/view/checkout-view.jsx';

// ----------------------------------------------------------------------

export const metadata = { title: `Checkout - ${CONFIG.site.name}` };

export default function Page() {
  return <CheckoutView />;
}
