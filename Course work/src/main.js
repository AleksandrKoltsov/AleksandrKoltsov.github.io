import { ControllerGame } from 'Game/ControllerGame.js';
import { ControllerCell } from 'Cell/ControllerCell.js';
import { Publisher } from "share/Publisher.js";

const publisher = new Publisher();
const game = new ControllerGame(publisher.methods);
const cell = new ControllerCell(publisher.methods);