import './LastUpdated.css';

export default function LastUpdated() {
  const deployedAt = process.env.REACT_APP_DEPLOYED_AT;

  return (
    <footer className="last-updated">
      Last updated: {deployedAt ? (
        <time dateTime={deployedAt}>
          {new Intl.DateTimeFormat('en-US', {
            month: 'long', day: 'numeric', year: 'numeric', timeZone: 'America/New_York',
          }).format(new Date(deployedAt))}
        </time>
      ) : 'available after deployment'}
    </footer>
  );
}
