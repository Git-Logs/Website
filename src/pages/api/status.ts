export default async function handler(req, res) {
    const response = await fetch("https://gitlogs.instatus.com/summary.json", {
        method: "GET",
    });
    const data = await response.json();
    res.status(200).json(data);
}