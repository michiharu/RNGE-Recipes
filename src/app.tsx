import React from "react";

import { registerRootComponent } from "expo";

import Game from "./game";

const App = () => <Game />;

registerRootComponent(App);
