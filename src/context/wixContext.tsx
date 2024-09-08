//"use client";

// import { createClient, OAuthStrategy } from "@wix/sdk";
// import { products, collections } from "@wix/stores";
// import Cookies from "js-cookie";
// import { createContext, ReactNode } from "react";

// const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");

// const WixClient = createClient({
//   modules: {
//     products,
//     collections
//     //   currentCart
//   },
//   auth: OAuthStrategy({
//     clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
//     tokens: {
//       refreshToken,
//       accessToken: { value: "", expiresAt: 0 },
//     },
//   }),
// });

// export type WixClient = typeof WixClient;

// export const WixClientContext = createContext<WixClient>(WixClient);

// export const WixClientContextProvider = ({
//   children,
// }: {
//   children: ReactNode;
// }) => {
//   return (
//     <WixClientContext.Provider value={WixClient}>
//       {children}
//     </WixClientContext.Provider>
//   );
// };

// import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// const supabase = createClient(supabaseUrl, supabaseKey);
// console.log({ supabase });
// const fetchData = async () => {
//   const { data, error } = await supabase
//   .from("categories")
//   .update({
//     // title: "shoes",
//     //slug: "shoes",
//     cat_img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600",
//     // description: 'this category created for shoes'
//     }).eq('id',19).select();
    
//   // const { data } = await supabase.from("categories").select();
//   console.log(data, error);
// };

// fetchData();
