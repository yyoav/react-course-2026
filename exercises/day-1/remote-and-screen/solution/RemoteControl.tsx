type RemoteControlProps = {
  onToggle: () => void
}

export default function RemoteControl({ onToggle }: RemoteControlProps) {
  return (
    <div style={{ border: '2px dashed gray', padding: '20px', textAlign: 'center' }}>
      <h3>Remote Control</h3>
      <button type="button" onClick={onToggle}>
        Power Toggle
      </button>
    </div>
  )
}