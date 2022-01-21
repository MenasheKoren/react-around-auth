import React from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function AuthConsumer() {
  return React.useContext(AuthContext);
}
