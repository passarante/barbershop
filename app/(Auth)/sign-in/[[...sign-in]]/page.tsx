import React from "react";
import { SignIn } from "@clerk/nextjs";

function Page() {
  return (
    <SignIn
      path="/sign-in"
      appearance={{ variables: { colorBackground: "#FF0000" } }}
    />
  );
}

export default Page;
