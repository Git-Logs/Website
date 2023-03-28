export default async function handler(req, res) {
    const { method } = req;

    switch(method) {
        case 'GET':
            try {

                const result = await fetch("https://v2.gitlogs.xyz/api/counts", {
                    method: "GET"
                });

                const data = await result.text();

                let hmm = data.split(',');

                return res.status(200).json({
                    guilds: hmm[0],
                    users: hmm[1],
                    shards: hmm[2]
                });

            } catch(err) {

                res.status(500).json({
                    success: false,
                    message: `Error: ${err.message}`
                });
            }
            break;
            default:
                res.status(400).json({
                    success: false,
                    message: 'Malformed Request'
                });
        break;
    }
}