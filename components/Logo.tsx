import Image from "next/image";
import React from "react";

function Logo() {
  return (
    <div>
      <Image src="/images/logo.png" alt="logo" width={89} height={28} />
    </div>
  );
}

export default Logo;
