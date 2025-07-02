import * as React from "react";
import { cva } from "class-variance-authority";

const avatarVariants = cva(
  "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full"
);

function Avatar({ className, ...props }) {
  return <div className={avatarVariants({ className })} {...props} />;
}

function AvatarImage({ className, ...props }) {
  return (
    <img
      className={`aspect-square h-full w-full object-cover ${className || ""}`}
      {...props}
    />
  );
}

function AvatarFallback({ className, children, ...props }) {
  return (
    <div
      className={`flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground ${className || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

export { Avatar, AvatarImage, AvatarFallback };
