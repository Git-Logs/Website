import { GetServerSideProps } from 'next';
import generateOAuth2 from "../utils/generateOAuth2";
import Permissions from '../utils/Permissions';
import { Metas } from '../components/SEO/Metas';

export default function Login() {
    return (
        <>
          <Metas
          title="GitHub • Git Logs"
          description="Follow us on GitHub and check out our Open-Source Projects."
          imageURL="/images/logo.webp"
          siteName="https://gitlogs.xyz"
        />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const url = "https://github.com/Git-Logs";

    return {
        redirect: {
            destination: url,
            permanent: false
        }
    }
}