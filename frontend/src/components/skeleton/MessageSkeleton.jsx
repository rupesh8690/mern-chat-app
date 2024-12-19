import React from "react";

const MessageSkeleton = () => {
  return (
    <div className="space-y-4">
      {/* Skeleton for Sender Message */}
      <div className="flex justify-end">
        <div className="flex flex-col gap-2 max-w-xs">
          <div className="skeleton h-10 w-32 rounded-lg"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
        </div>
      </div>
      
      {/* Skeleton for Receiver Message */}
      <div className="flex justify-start">
        <div className="flex flex-col gap-2 max-w-xs">
          <div className="skeleton h-10 w-32 rounded-lg"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
        </div>
      </div>
      
      {/* Skeleton for Sender Message */}
      <div className="flex justify-end">
        <div className="flex flex-col gap-2 max-w-xs">
          <div className="skeleton h-10 w-32 rounded-lg"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
        </div>
      </div>

      {/* Skeleton for Receiver Message */}
      <div className="flex justify-start">
        <div className="flex flex-col gap-2 max-w-xs">
          <div className="skeleton h-10 w-32 rounded-lg"></div>
          <div className="skeleton h-4 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default MessageSkeleton;
