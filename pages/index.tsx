import Image from 'next/image';
import { PageWrapper } from 'components/PageWrapper/PageWrapper';
import { NextPageWithLayout } from './_app';
import { getLayout } from 'components/Layout/BaseLayout/BaseLayout';


const Home: NextPageWithLayout = () => (
	<PageWrapper>
		<Image
			src="/next.svg"
			alt="Next.js Logo"
			width={180}
			height={37}
			priority
		/>
	</PageWrapper>
);

Home.getLayout = getLayout
export default Home;