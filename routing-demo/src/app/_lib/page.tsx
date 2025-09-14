// a private folder have an underscore before the name
// will not become routes
export default function PrivateRoute() {
  return <h1>You cannot view this in the browser</h1>;
}
