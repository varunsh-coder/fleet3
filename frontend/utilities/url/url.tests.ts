import {
  buildQueryStringFromParams,
  reconcileMutuallyInclusiveHostParams,
} from ".";

describe("url utilities > reconcileMutuallyInclusiveHostParams", () => {
  it("leaves macSettingsStatus and teamId unchanged when both are present", () => {
    const [macSettingsStatus, teamId] = ["pending" as const, 1];
    expect(
      reconcileMutuallyInclusiveHostParams({ macSettingsStatus, teamId })
    ).toEqual({
      macos_settings: "pending",
      team_id: 1,
    });
  });

  it("adds team_id: 0 when macSettingsStatus is present and teamId is not", () => {
    const [macSettingsStatus, teamId] = ["pending" as const, undefined];
    expect(
      reconcileMutuallyInclusiveHostParams({
        macSettingsStatus,
        teamId,
      })
    ).toEqual({ macos_settings: "pending", team_id: 0 });
  });

  it("does not add macos_settings when teamId is present and macSettingsStatus is not", () => {
    const [macSettingsStatus, teamId] = [undefined, 1];
    expect(
      reconcileMutuallyInclusiveHostParams({ macSettingsStatus, teamId })
    ).toEqual({
      team_id: 1,
    });
  });

  it("adds nothing when neither macSettingsStatus nor teamId are present", () => {
    const [macSettingsStatus, teamId] = [undefined, undefined];
    expect(
      reconcileMutuallyInclusiveHostParams({ macSettingsStatus, teamId })
    ).toEqual({});
  });
});

describe("url utilites > buildQueryStringFromParams", () => {
  it("creates a query string from a params object", () => {
    const params = {
      query: "test",
      page: 1,
      order: "asc",
      isNew: true,
    };
    expect(buildQueryStringFromParams(params)).toBe(
      "query=test&page=1&order=asc&isNew=true"
    );
  });

  it("filters out undefined values", () => {
    const params = {
      query: undefined,
      page: 1,
      order: "asc",
    };
    expect(buildQueryStringFromParams(params)).toBe("page=1&order=asc");
  });

  it("filters out empty string values", () => {
    const params = {
      query: "",
      page: 1,
      order: "asc",
    };
    expect(buildQueryStringFromParams(params)).toBe("page=1&order=asc");
  });

  it("filters out null values", () => {
    const params = {
      query: null,
      page: 1,
      order: "asc",
    };
    expect(buildQueryStringFromParams(params)).toBe("page=1&order=asc");
  });
});
