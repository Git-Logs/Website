import { GetServerSideProps } from 'next';
import generateOAuth2 from "../utils/generateOAuth2";
import Permissions from '../utils/Permissions';
import { Metas } from '../components/SEO/Metas';

export default function Login() {
    return (
        <>
          <Metas
          title="Twitter • Git Logs"
          description="Follow us on Twitter for Updates"
          imageURL="/images/logo.webp"
          siteName="https://gitlogs.xyz"
        />
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async(ctx) => {

    const url = "https://twitter.com/GithubLogs";

    return {
        redirect: {
            destination: url,
            permanent: false
        }
    }
}