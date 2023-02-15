import dynamic from 'next/dynamic';

const MapWithNoSSR = dynamic(() => import('./map'), {
  ssr: false,
});


export default function Home(props) {
  return (
    <div>
      <MapWithNoSSR concess={props.concess} latitude={props.latitude} longitude={props.longitude}/>
    </div>
  );
}
 