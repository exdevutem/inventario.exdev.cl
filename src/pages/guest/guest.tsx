import {RedirectToSignIn} from "@clerk/clerk-react";

const Guest = () => <div className={"flex items-center justify-center min-h-screen"}>
  <RedirectToSignIn/>
</div>

export default Guest;