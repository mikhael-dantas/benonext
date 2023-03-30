import { NextApiRequest, NextApiResponse } from "next";
import mercadopago from "mercadopago";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";

mercadopago.configure({
    access_token: process.env.MP_ACCESS_TOKEN!,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { amount } = req.body;

    try {
        const preference: CreatePreferencePayload = {
        items: [
            {
            title: "Product",
            unit_price: amount,
            quantity: 1,
            },
        ],
        back_urls: {
            success: "https://localhost/success",
            failure: "https://localhost/failure",
            pending: "https://localhost/pending",
        },
        auto_return: 'approved'
        };

        const response = await mercadopago.preferences.create(preference);

        res.status(200).json({
        payment_link: response.body.init_point,
        });
    } catch (error) {
        res.status(500).json({ error: "Could not create payment" });
    }
};
