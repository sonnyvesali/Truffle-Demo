const { intToBuffer } = require("ethereumjs-util");

const SimpleStorage = artifacts.require("SimpleStorage.sol");

contract("SimpleStorage", () => {
  it("Should update data", async () => {
    const storage = await SimpleStorage.new();
    await storage.store(10);
    const data = await storage.retrieve();
    assert(data.toString() === "10");
  });
});
