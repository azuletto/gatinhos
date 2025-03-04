import supabase from "./db";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Método não permitido");

    const { user, item, preco } = req.body;

    // Pegar saldo do usuário
    const { data, error } = await supabase
        .from("usuarios")
        .select("saldo")
        .eq("username", user)
        .single();

    if (error || !data) return res.json({ success: false });

    if (data.saldo >= preco) {
        // Atualizar saldo
        await supabase
            .from("usuarios")
            .update({ saldo: data.saldo - preco })
            .eq("username", user);

        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}
