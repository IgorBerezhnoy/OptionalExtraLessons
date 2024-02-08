import Image from "next/image";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { NextPageWithLayout } from "./_app";
import { getLayout } from "components/Layout/BaseLayout/BaseLayout";
import { useTranslation } from "../hooks/useTranslation";

const Home: NextPageWithLayout = () => {
  const t = useTranslation();
  return (
    <PageWrapper>
      <Image
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1>{t.test}</h1>
    </PageWrapper>
  );
};

Home.getLayout = getLayout;
export default Home;
