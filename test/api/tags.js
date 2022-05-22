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
    ec.tags.INVALID_SCHEMA
  );

  test.tags.getById.pass(
    "Gets a tag by id",
    "1"
  )

  test.tags.getById.fail(
    "Get by id fails if tag not present",
    ec.tags.INVALID_ID,
    "2"
  )

  test.tags.update.pass(
    "Updates a tag",
    {
      id: "0",
      name: "Miscellaneous",
      color: "#ffffff",
    },
  )

  test.tags.all.pass("Get all tags");

  test.tags.update.fail(
    "Update fails if no tag with given id",
    {
      id: "2",
      name: "Miscellaneous",
      color: "#ffffff",
    },
    ec.tags.INVALID_ID
  )

  test.tags.delete.pass(
    "Deletes a tag",
    {
      id: "0"
    }
  )

  test.tags.delete.fail(
    "Delete fails if no tag with given id",
    {
      id: "2"
    },
    ec.tags.INVALID_ID
  )

  test.tags.all.pass("Get all tags");
}