import React, { useEffect } from "react";
import { sharingInformationService } from "../services/sharing-information.service";

export default function ComponentTwo() {
  // we use $ when is an observable or async variable

  const subscription$ = sharingInformationService.getSubject();

  useEffect(() => {
    subscription$.subscribe((value) => {
      console.log({ value });
    });
  }, []);

  return <div>ComponentTwo</div>;
}
