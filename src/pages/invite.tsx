import { GetServerSideProps } from 'next';
import generateOAuth2 from "../utils/generateOAuth2";
import Permissions from '../utils/Permissions';
import { Metas } from '../components/SEO/Metas';

export default function Login() {
    return (
        <>
          <Metas
            title="Invite • Git Logs"
            description="Invite Git Logs to your Discord Server."
            imageURL="/images/logo.webp"
            siteName="https://gitlogs.xyz"
          />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {
    const guildId = String(ctx.query.guildId || "");

    const url = generateOAuth2({
        clientId: process.env.CLIENT_ID,
        redirect_uri: process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/api/callback' 
        : 'https://gitlogs.xyz/api/callback',
        scopes: ["identify", "guilds", "bot", "applications.commands"],
        prompt: "none",
        response_type: "code",
        permissions: Permissions.resolve(
            [
                "MANAGE_GUILD",
                "MANAGE_CHANNELS",
                "CREATE_INSTANT_INVITE",
                "MANAGE_NICKNAMES",
                "CHANGE_NICKNAME",
                "MANAGE_EMOJIS_AND_STICKERS",
                "MANAGE_WEBHOOKS",
                "VIEW_AUDIT_LOG",
                "READ_MESSAGE_HISTORY",
                "MANAGE_EVENTS",
                "SEND_MESSAGES",
                "SEND_MESSAGES_IN_THREADS",
                "CREATE_PUBLIC_THREADS",
                "CREATE_PRIVATE_THREADS",
                "SEND_TTS_MESSAGES",
                "MANAGE_MESSAGES",
                "MANAGE_THREADS",
                "EMBED_LINKS",
                "ATTACH_FILES",
                "ADD_REACTIONS",
                "USE_EXTERNAL_EMOJIS",
                "USE_EXTERNAL_STICKERS",
                "USE_APPLICATION_COMMANDS"
        ]),
        guildId
    })

    return {
        redirect: {
            destination: url,
            permanent: false
        }
    }
}