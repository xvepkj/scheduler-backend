import test from "../test-gen.js"; 
import ec from "../../util/error-codes.js";

export default function() {
  test.tags.add.pass(
    "Adds a tag",
    {
      color: "#00ff00",
      name: "Misc",
    }
  );

  test.tags.all.pass("Get the added tag");

  test.tags.add.pass(
    "Adds another tag",
    {
      color: "#ffffff",
      name: "Peace",
    }
  );

  test.tags.all.pass("Get all tags");

  test.tags.add.fail(
    "Fails on missing field(s)",
    {
      color: "#ffffff",
    },
    ec.tags.INVALID_REQ
  );

  test.tags.all.pass("Get all tags");
}