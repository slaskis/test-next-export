import Link from "next/link";
import { withRouter } from "next/router";

export default withRouter(({ router }) => (
  <>
    <p>{router.query.text || "no text query"}</p>
    <Link href="/hello" shallow>
      <a>Visit hello</a>
    </Link>
  </>
));
