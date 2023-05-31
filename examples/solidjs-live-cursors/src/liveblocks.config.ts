import { createClient, type Room } from "@liveblocks/client";
let PUBLIC_KEY = "pk_YOUR_PUBLIC_KEY";

const client = createClient({
  publicApiKey: PUBLIC_KEY,
});

const initialPresence = {
  cursor: null,
};
let roomId = "solidjs-live-cursors";

// const room: Room<{},{},{},{}> = client.enter(roomId, { initialPresence });
// const room = client.enter<{},{},{},{}>(roomId, { initialPresence });
// const room =client.enter(roomId, { initialPresence })
const room =client.enter<Presence, Storage, UserMeta, RoomEvent>(roomId, { initialPresence })

// Presence represents the properties that exist on every user in the Room
// and that will automatically be kept in sync. Accessible through the
// `user.presence` property. Must be JSON-serializable.
type Presence = {
  cursor: {
     x: number, 
     y: number, 
     color: string
    } | null
};



// Optionally, Storage represents the shared document that persists in the
// Room, even after all users leave. Fields under Storage typically are
// LiveList, LiveMap, LiveObject instances, for which updates are
// automatically persisted and synced to all connected clients.
type Storage = {
  // author: LiveObject<{ firstName: string, lastName: string }>,
  // ...
};

// Optionally, UserMeta represents static/readonly metadata on each user, as
// provided by your own custom auth back end (if used). Useful for data that
// will not change during a session, like a user's name or avatar.
type UserMeta = {
  // id?: string,  // Accessible through `user.id`
  // info?: Json,  // Accessible through `user.info`
};

// Optionally, the type of custom events broadcast and listened to in this
// room. Use a union for multiple events. Must be JSON-serializable.
type RoomEvent = {
  // type: "NOTIFICATION",
  // ...
};

export type TypedRoom =  Room<Presence, Storage, UserMeta, RoomEvent>;
