import Forums from "../Components/Forums";

function ForumsIndex( {user}) {
  return (
    <div>
      <Forums user={user} />
    </div>
  );
}

export default ForumsIndex;