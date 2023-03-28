import { GetServerSideProps } from 'next';
import generateOAuth2 from "../utils/generateOAuth2";
import Permissions from '../utils/Permissions';
import { Metas } from '../components/SEO/Metas';

export default function Login() {
    return (
        <>
          <Metas
          title="Discord • Git Logs"
          description="Join the Git Logs Support Server"
          imageURL="/images/logo.webp"
          siteName="https://gitlogs.xyz"
        />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const url = "https://discord.gg/sdf5bfJbVf";

    return {
        redirect: {
            destination: url,
            permanent: false
        }
    }
}