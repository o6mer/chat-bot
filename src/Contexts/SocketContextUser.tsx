import { createContext, ReactNode } from "react";
import { io, Socket } from "socket.io-client";
import { useSocketUser } from "../Hooks/useSocketUser";
import { TFollowUp, TMessage } from "../Types/Types";

export type TSocketContextUser = {
  socket: Socket;
  isConnected: boolean;
  messagesList: TMessage[];
  sendMessage: (messageContent: string) => void;
  chooseFollowUp: (followUp: TFollowUp) => void;
};

export const SocketContextUser = createContext<TSocketContextUser | null>(null);

const socket = io("http://localhost:3002/", {
  closeOnBeforeunload: false,
});

const SocketContextUserProvider = ({ children }: { children: ReactNode }) => {
  const values = useSocketUser(socket);

  return (
    <SocketContextUser.Provider value={values}>
      {children}
    </SocketContextUser.Provider>
  );
};

export default SocketContextUserProvider;
