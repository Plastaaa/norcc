import dynamic from 'next/dynamic';

const VuWithNoSSR = dynamic(() => import('./vu'), {
  ssr: false,
});


export default function Home(props) {
  return (
    <div>
      <VuWithNoSSR/>
    </div>
  );
}
 