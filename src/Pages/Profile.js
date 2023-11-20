const Profile = ({ profile }) => (
  <>
    {Object.entries(profile).map(([key, value]) => (
      <div key={key}>
        <span>{key}</span>:<span>{value}</span>
      </div>
    ))}
  </>
);

export default Profile;
