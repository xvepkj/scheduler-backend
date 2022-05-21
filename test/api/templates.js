import test from "../test-gen.js";
import ec from  "../../util/error-codes.js";

export default function() {
  test.templates.add.pass(
    "Add a template",
    {
      name: "study-template",
      events: [
        {
          name: "study",
          startTime: "11:30",
          endTime: "22:45",
          trackingType: "UNTRACKED",
          tagId : null
        },
        {
          name: "play",
          startTime: "04:35",
          endTime: "12:34",
          trackingType: "TRACKED",
          tagId : null
        }
      ]
    }
  );

  test.templates.all.pass("Get all templates");

  test.templates.update.pass(
    "Update a template",
    {
      id: "0",
      name: "study-template",
      events: [
        {
          name: "onkita",
          startTime: "11:30",
          endTime: "22:45",
          trackingType: "UNTRACKED",
          tagId : null
        },
        {
          name: "play",
          startTime: "04:35",
          endTime: "12:34",
          trackingType: "TRACKED",
          tagId : null
        }
      ]
    }
  );

  test.templates.getById.pass("Get the first template","0");
  test.templates.delete.pass("Delete a template", {
    id : "0"
  });
}