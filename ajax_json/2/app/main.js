import { ControllerUsers } from "./users/ControllerUsers.js";
import { ControllerUserPosts } from "./userPosts/ControllerUserPosts.js";
import { Publisher } from "./share/Publisher.js";

const publisher = new Publisher();
const users = new ControllerUsers(publisher.methods);
const posts = new ControllerUserPosts(publisher.methods);