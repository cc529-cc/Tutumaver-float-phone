// @ts-check
import { appRoot } from "@prisma/composer";
import aiVirtualPhoneService from "./service.mjs";

export default appRoot("tutufloatphone", ({ provision }) => {
  provision(aiVirtualPhoneService, { id: "aivirtualphone" });
});
