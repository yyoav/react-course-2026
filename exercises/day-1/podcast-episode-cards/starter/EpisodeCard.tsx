interface EpisodeCardProps {
  title: string
  host: string
}

export default function EpisodeCard(props: EpisodeCardProps) {


  return (
    <article className="episode-card">
      <h2></h2>
      <p className="episode-host">Hosted by: </p>

      <button className="episode-like-btn">
        Like
      </button>
      <p className="episode-likes">Likes: </p>

      <input
        type="text"
        placeholder="Add a personal note..."
        className="episode-note-input"
      />
      <p className="episode-note">Note: </p>
    </article>
  )
}
