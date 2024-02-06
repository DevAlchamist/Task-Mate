"use client";

import { useOthers, useSelf } from "@/liveblocks.config";
import { UserAvatar } from "./user-avatar";
import { connectionIdToColors } from "@/lib/utils";

const MAX_USER = 2;

export const Participants = () => {
  const Users = useOthers();
  const currentUser = useSelf();
  const ShownUsers = Users.length > MAX_USER;
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {Users.slice(0, MAX_USER).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColors(connectionId)}
              key={connectionId}
              src={info?.picture}
              name={info?.name}
              fallback={info?.name?.[0]}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColors(currentUser.connectionId)}
            src={currentUser.info?.picture}
            name={`${currentUser.info?.name} (You)`}
            fallback={currentUser.info?.name?.[0]}
          />
        )}

        {ShownUsers && (
          <UserAvatar
            src={currentUser.info?.picture}
            name={`${Users.length - MAX_USER} more`}
            fallback={`+${Users.length - MAX_USER}`}
          />
        )}
      </div>
    </div>
  );
};
export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]"></div>
  );
};
