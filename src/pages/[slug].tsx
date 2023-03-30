import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";

import { api } from "~/utils/api";
const SinglePostPage: NextPage = () => {
  const { isLoaded: userLoaded, isSignedIn } = useUser();

  // Returns empty div if BOTH aren't loaded, since user tends to load faster
  api.post.getAll.useQuery();
  if (!userLoaded) return <div />;

  return (
    <>
      <Head>
        <title>Slug</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen justify-center">
        <div className="flex h-screen justify-center">
          <div>Profile View</div>
        </div>
      </main>
    </>
  );
};

export default SinglePostPage;