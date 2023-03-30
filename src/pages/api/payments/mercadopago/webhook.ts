// import { NextApiRequest, NextApiResponse } from "next";
// import {  } from "mercadopago";
// import { verify } from "mercadopago/lib/mercadopago";

// const webhookSecret = process.env.MP_WEBHOOK_SECRET!;

// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   if (req.method === "POST") {
//     const body = JSON.stringify(req.body);
//     const signature = req.headers["x-mp-signature"] as string;

//     const verified = verify(body, signature, webhookSecret);
//     if (!verified) {
//       res.status(400).send("Invalid signature");
//       return;
//     }

//     const notification: MercadoPagoNotification = req.body;

//     console.log("Received MercadoPago webhook notification:", notification);

//     // Handle the notification here

//     res.status(200).send("Notification received");
//   } else {
//     res.status(404).send("Not found");
//   }
// };
