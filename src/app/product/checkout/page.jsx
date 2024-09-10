import { CONFIG } from "../../../config-global";

import CheckoutView from 'src/sections/checkout/view/checkout-view'

// ----------------------------------------------------------------------

export const metadata = { title: `Checkout - ${CONFIG.site.name}` };

export default function CheckoutPage() {
  return <CheckoutView />;
}
