type ScreenProps = {
  status: string
}

export default function Screen({ status }: ScreenProps) {
  return (
    <div style={{ border: '2px solid black', padding: '20px', marginBottom: '10px', textAlign: 'center' }}>
      <h2>TV Screen</h2>
      <h1>{status}</h1>
    </div>
  )
}