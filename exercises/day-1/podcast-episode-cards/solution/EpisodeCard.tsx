import { useState } from 'react'

interface EpisodeCardProps {
  title: string
  host: string
}

export default function EpisodeCard(props: EpisodeCardProps) {
  const [cardState, setCardState] = useState({ likeCount: 0, note: '' })

  function handleLike() {
    setCardState(prev => ({ ...prev, likeCount: prev.likeCount + 1 }))
  }

  function handleNoteChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCardState(prev => ({ ...prev, note: event.target.value }))
  }

  return (
    <article className="episode-card">
      <h2>{props.title}</h2>
      <p className="episode-host">Hosted by: {props.host}</p>

      <button className="episode-like-btn" onClick={handleLike}>
        Like
      </button>
      <p className="episode-likes">Likes: {cardState.likeCount}</p>

      <input
        type="text"
        placeholder="Add a personal note..."
        className="episode-note-input"
        onChange={handleNoteChange}
        value={cardState.note}
      />
      <p className="episode-note">Note: {cardState.note}</p>
    </article>
  )
}
