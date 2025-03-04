import supabase from "./db";

export default async function handler(req, res) {
    if (req.method !== "GET") return res.status(405).send("Método não permitido");

    const { user } = req.query;
    const { data } = await supabase
        .from("usuarios")
        .select("saldo")
        .eq("username", user)
        .single();

    res.json({ saldo: data ? data.saldo : 0 });
}
