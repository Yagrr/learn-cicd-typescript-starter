import { IncomingHttpHeaders } from "http";
import { getAPIKey } from "../api/auth.js";
import { describe, expect, test } from "vitest";

describe("getAPIKey", () => {
  const noAutho = {
    "Content-Type": "text/html",
  } as IncomingHttpHeaders;

  const badAutho = {
    authorization:
      "Bearer 1bf57262612163abd43ef265dabc81dcb0d098c6e1f53f7cbbf7d610d951a766",
  } as IncomingHttpHeaders;

  const okAutho = {
    authorization:
      "ApiKey 910dff381691b3fef5ddc43c91e7194615f019082f16992bda1cd38c893ea648",
  } as IncomingHttpHeaders;

  const apiKey =
    "910dff381691b3fef5ddc43c91e7194615f019082f16992bda1cd38c893ea648";

  test("Invalid headers returns null", () => {
    expect(getAPIKey(noAutho)).toStrictEqual(null);
  });

  test("Valid header but invalid encoding returns null", () => {
    expect(getAPIKey(badAutho)).toStrictEqual(null);
  });

  test("Valid headers returns ApiKey", () => {
    expect(getAPIKey(okAutho)).toStrictEqual(apiKey);
  });
});
