import { FunctionComponent } from 'react';
import { Artist } from '../interfaces/track.list';

interface ArtistsProps {
  artists: Artist[];
}

const ArtistsLinks: FunctionComponent<ArtistsProps> = ({ artists }) => {
  return (
    <>
      {artists.map(
        (item, index): JSX.Element => (
          <span key={`link-${item.id}`}>
            <a
              href={item.external_urls.spotify}
              target="_blank"
              rel="noreferrer"
              data-cy="btn-artist-spotify-link"
            >
              {item.name}
            </a>
            {index !== artists.length - 1 && ', '}
          </span>
        )
      )}
    </>
  );
};

export default ArtistsLinks;
