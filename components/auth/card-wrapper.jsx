"use client";

import { Card, CardHeader, CardContent, CardFooter } from "../ui/card";
import { BackButton } from "./back-button";
import { Header } from "./header-auth";
import { Social } from "./social";

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}) => {
  return (
    <Card className="shadow-md w-[400px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref}></BackButton>
      </CardFooter>
    </Card>
  );
};
