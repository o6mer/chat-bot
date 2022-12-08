import React from "react";

export type TUser = {
  username: string;
  email: string;
  roll: string;
};

export type TMessage = {
  writer: string;
  time: Date;
  type: string;
  content?: any;
  children?: any;
};

export type TTextMessage = {
  writer: string;
  time: Date;
  content?: string;
};

export type TInputMessage = {
  writer: string;
  time: Date;
  content?: any;
};

export type TChat = {
  _id: string;
  costumer: { id: string; name?: string };
  isOpen: boolean;
  messages: Array<TMessage>;
  creationTime: Date;
};
