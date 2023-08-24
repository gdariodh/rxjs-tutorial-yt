import React, { useEffect, useState } from "react";
import { sharingInformationService } from "../services/sharing-information.service";

export default function ComponentTwo() {
  // we use $ when is an observable or async variable

  const [count, setCount] = useState(0);

  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((data) => {
      if (!!data) {
        setCount((prev) => prev + 1);
      }
    });
  }, []);

  return <div>{count}</div>;
}
