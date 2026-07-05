interface EpisodeCardProps {
  title: string
  host: string
}

export default function EpisodeCard(props: EpisodeCardProps) {
  return (
    <article className="episode-card">
      <h2>{props.title}</h2>
      <p className="episode-host">Hosted by: {props.host}</p>
    </article>
  )
}
