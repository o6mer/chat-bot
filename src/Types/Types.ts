import React from "react";

export type TUser = {
  username: string;
  email: string;
  roll: string;
};

export type TMessage = {
  writer: string;
  time: string;
  type: string;
  content?: any;
  children?: any;
};

export type TTextMessage = {
  writer: string;
  time: string;
  content?: string;
};

export type TInputMessage = {
  writer: string;
  time: string;
  content?: any;
};
