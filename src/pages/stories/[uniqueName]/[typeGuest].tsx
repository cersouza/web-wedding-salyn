import { GetStaticPaths, GetStaticProps } from 'next';
import GetStoryDetail from '../../../app/use-cases/GetStoryDetailUseCase';
import GetTopStories from '../../../app/use-cases/GetTopStoriesUseCase';
import Story from '../../../domain/Story';
import SalynHomeTemplate from '../../../components/templates/home-page/salyn';
import EmaioHomeTemplate from '../../../components/templates/home-page/emaio';

interface QueryProps {
    typeGuest: string
}

interface StoryResponse {
    ok: boolean,
    data: Story
}

export default function Home({ data }: {  data: Story }) {
    const getDefaultTemplate = () => {
      switch (data?.template) {
        case 'emaio':
          return <EmaioHomeTemplate story={data} />;
        default:
          return <SalynHomeTemplate story={data} />;
      }
    };
  
    return (
      <>
        { getDefaultTemplate() }
      </>
    );
  }

export const getStaticPaths: GetStaticPaths = async () => {
    const getTopStories = new GetTopStories();
    const events = await getTopStories.execute();

    const eventsUniqueNames = events.map( uniqueName => ({
        params: { 
            uniqueName, 
            typeGuest: 'convidado'
        }
    }));

    return {
        paths: eventsUniqueNames,
        fallback: true
    }
} 

export const getStaticProps: GetStaticProps = async (context) => {
    const { uniqueName } = context.params as { uniqueName: string };

    const getStoryDetail = new GetStoryDetail();
    const data = await getStoryDetail.execute({ uniqueName });

    return {
        props: { data },
        revalidate: 60
    }
}
