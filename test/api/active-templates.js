import test from "../test-gen.js";
import ec from  "../../util/error-codes.js";

export default function() {

  test.activeTemplates.add.fail(
    "Fails on invalid template id",
    {
      templateId: "0",
      startingDate: "2022-05-21",
      repeatCriteria: "CUSTOM",
      repeatCriteriaData: [ "2022-05-25", "2022-05-26" ]
    },
    ec.activeTemplates.INVALID_TEMPLATE_ID
  );

  // Add template for testing
  test.templates.add.pass(
    "Adds a template first",
    {
      name: "study-template",
      events: [
        {
          name: "study",
          startTime: "11:30",
          endTime: "22:45",
          trackingType: "UNTRACKED",
          tagId : null
        }
      ]
    }
  );

  test.activeTemplates.add.pass(
    "Adds an active template",
    {
      templateId: "1",
      startingDate: "2022-05-21",
      repeatCriteria: "CUSTOM",
      repeatCriteriaData: [ "2022-05-25", "2022-05-26" ]
    }
  );

  test.activeTemplates.add.pass(
    "Adds another active template",
    {
      templateId: "1",
      startingDate: "2022-05-22",
      repeatCriteria: "MONTHLY",
      repeatCriteriaData: [1, 2, 3]
    }
  );

  test.activeTemplates.all.pass("Get all active templates");

  test.activeTemplates.update.pass(
    "Updates an active template",
    {
      id: "0",
      templateId: "1",
      startingDate: "2022-05-21",
      repeatCriteria: "FREQUENCY",
      repeatCriteriaData: 3
    }
  );

  test.activeTemplates.getById.pass("Get active template", "0");

  test.activeTemplates.getById.fail(
    "Fails if invalid id",
    ec.activeTemplates.INVALID_ID,
    "2",
  );

  test.activeTemplates.delete.pass("Deletes an active template", {
    id : "0"
  });
}