import Link from 'next/link';

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Product Details</h1>
      <p style={{ fontSize: '1.2rem', marginTop: '1rem' }}>
        You are viewing product ID: <strong style={{ color: '#61dafb' }}>{params.id}</strong>
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link href="/" style={{ color: '#61dafb', textDecoration: 'underline' }}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}