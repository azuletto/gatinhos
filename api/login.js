import supabase from "./db";

export default async function handler(req, res) {
    if (req.method !== "POST") return res.status(405).send("Método não permitido");

    const { username, password } = req.body;
    const { data, error } = await supabase
        .from("usuarios")
        .select("*")
        .eq("username", username)
        .eq("password", password)
        .single();

    if (data) {
        res.json({ success: true, user: { username: data.username, saldo: data.saldo } });
    } else {
        res.json({ success: false, error });
    }
}
