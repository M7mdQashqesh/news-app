import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="not-found-container">
      <div className="not-found-content">
        <p className="not-found-status">404</p>
        <h1 className="not-found-title">Page not found</h1>
        <p className="not-found-description">Sorry, we couldn’t find the page you’re looking for.</p>
        <Link href="/" className="not-found-home-link">
          Go back home
        </Link>
      </div>
    </main>
  );
}
