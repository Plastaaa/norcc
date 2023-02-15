import Link from 'next/link'

export default function FourOhFour() {
  return <>
    <h1>404 - Page inconnue</h1>
    <Link href="/">
      <a>
        Retour à l'accueil
      </a>
    </Link>
  </>
}